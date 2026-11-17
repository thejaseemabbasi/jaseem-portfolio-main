---
title: Turning client call transcripts into structured minutes without losing context
description: How I paired Granola, Make.com, Google Gemini, and Apps Script to eliminate repetitive meeting admin while keeping decisions auditable.
pubDate: 2026-11-05
category: Practice
readingTime: 4 min read
author: Jaseem Abbasi
tags: ['ai-ops', 'automation', 'delivery']
featured: true
image:
  src: /images/journal-03.webp
  alt: A small team in discussion around a table in a bright office
  width: 800
  height: 550
---

Project leaders lose hours every week rewriting meeting notes, extracting action items, and formatting follow-ups. The goal of automating minutes is not to replace judgment—it is to remove repetitive formatting so you can review decisions in two minutes instead of thirty.

## How the workflow runs

The pipeline starts with raw call transcripts captured during stakeholder sessions. A lightweight trigger passes the transcript, meeting title, and date into Make.com, which pulls a controlled instruction prompt from a Google Doc—making it easy to adjust output rules (decisions first, action owners, due dates) without touching the automation itself.

- **Structured AI summarization:** Google Gemini converts the raw transcript into a clean table of decisions, blockers, and next steps.
- **Instant Google Sheets logging:** A dedicated sheet is created automatically so every session becomes searchable across the program.
- **Automated formatting:** A Google Apps Script sets column widths, typography, and borders so the output is ready to share after a quick human proofread.

> Automation should remove administrative friction, never accountability.

## Why it works in practice

A two-minute human review before sending keeps accuracy high and ensures engineering, product, and client stakeholders always leave a call with the same written record.
