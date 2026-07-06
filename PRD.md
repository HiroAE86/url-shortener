# Design URL Shortener

## Introduction

A URL Shortener is a service that takes a long URL and generates a shorter, unique alias that redirects users to the original URL. Popular examples include bit.ly, TinyURL, and Twitter's t.co.

### URL Shortening Concept

This alias is often a fixed-length string of characters. The system should be able to handle millions of URLs, allowing users to create, store, and retrieve shortened URLs efficiently. Each shortened URL needs to be unique and persistent. Additionally, the service should be able to handle high traffic, with shortened URLs redirecting to the original links in near real-time. In some cases, the service may include analytics to track link usage, such as click counts and user locations.

### Functional Requirements

We extract verbs from the problem statement to identify core operations:

"takes a long URL and generates a shorter alias" → CREATE operation (URL Shortening)
"redirects users to the original URL" → READ operation (URL Redirection)
"track link usage" → UPDATE/INCREMENT operation (Analytics)
Each verb maps to a functional requirement that defines what the system must do.

Users should be able to input a long URL and receive a unique, shortened alias. The shortened URL should use a compact format with English letters and digits to save space and ensure uniqueness.

When users access a shortened URL, the service should redirect them seamlessly to the original URL with minimal delay.

The system should be able to track the number of times each shortened URL is accessed to provide insights into link usage.

## Out of Scope

### Scale Requirements

100M Daily Active Users
Read:write ratio = 100: 1
Data retention for 5 years
Assuming 1 million write requests per day
Assuming each entry is about 500 bytes

### System Design Problems

Work through common interview questions step-by-step with personalized feedback.
Try It Yourself
Non-Functional Requirements
We extract adjectives and descriptive phrases from the problem statement to identify quality constraints:

"unique" alias → System must guarantee no collisions
"millions of URLs" + "high traffic" → System must handle large scale
"efficiently" + "near real-time" → System must respond quickly
"persistent" → System must not lose data
"handle high traffic" → System must remain operational under load
Each adjective becomes a non-functional requirement that constrains our design choices.

- High Availability: The service should ensure that all URLs are accessible 24/7, with minimal downtime, so users can reliably reach their destinations. (Derived from 'high traffic')

- Low Latency: URL redirections should occur almost instantly, ideally in under a few milliseconds, to provide a seamless experience for users. (Derived from 'near real-time' and 'efficiently')

- High Durability: Shortened URLs should be stored reliably so they persist over time, even across server failures, ensuring long-term accessibility. (Derived from 'persistent')

- Uniqueness: Each shortened URL must map to exactly one original URLxw across all users. (Derived from 'unique')

- Security: The service must prevent malicious links from being created and protect user data, implementing safeguards against spam, abuse, and unauthorized access to sensitive information.

## Data Model

The data model is derived from extracting nouns in the problem statement:

- "URL" and "alias" → URLMapping entity with short_url and original_url fields
- "link usage" and "click counts" → Analytics entity with click_count field
- "persistent" requirement → created_at timestamp for durability tracking
- Ownership is distributed across services to enable independent scaling. The URL Shortening Service owns URLMapping to ensure unique ID generation. The Analytics Service owns Analytics to handle high-volume write traffic without impacting redirection performance.
