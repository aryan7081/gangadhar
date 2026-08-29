---
title: Keeping Django APIs near 5ms
date: 2026-03-12
description: What actually moved the needle when frequently accessed endpoints needed to stay fast.
tags: [django, redis, performance]
---

During a backend internship at IIT Roorkee I worked on a set of public APIs that aggregated government schemes, scholarships, and employment resources. The useful endpoints were read-heavy. Once the shape of the data settled, the same records were requested over and over.

The first version hit the database on every request. That is fine for a small dataset and a quiet environment. It is not fine when the same list is fetched thousands of times a day and you still want the page that depends on it to feel instant.

## What we cached

We used Redis through Cacheops, and we were specific about *what* went into the cache:

- Responses that changed rarely — scheme lists, filter options, static lookups.
- Querysets that were expensive to build but cheap to invalidate when an admin updated a record.
- Nothing that depended on a one-off user input unless we had a stable cache key for it.

The target was not "cache everything." It was: keep the endpoints people actually hit around **5ms** after the cache was warm.

## A few rules that held up

1. **Name the key after the question, not the table.** `schemes:active:state:up` is easier to reason about than a hashed queryset.
2. **Invalidate on write.** A cache that is slightly stale is worse than a slightly slower query when the data is public and time-sensitive.
3. **Measure the hot path.** Caching a cold endpoint does not change the user experience.

Celery handled the slower work — scraping, transforming, and calling Gemini function-calling workflows — so the request path stayed thin. That split mattered more than any single Redis setting.

I still reach for this pattern first: make the write path honest, make the read path cheap, and keep the two from stepping on each other.
