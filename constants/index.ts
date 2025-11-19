// ---

// ## Performance Considerations

// - **Parallel Processing**: Verify multiple claims concurrently (with rate limit awareness)
// - **Caching**: Store search results to avoid redundant API calls
// - **Transcript Chunking**: Process long transcripts in segments to avoid token limits
// - **Smart Search**: Generate precise queries to minimize API usage

// ### Rate Limits & Optimization

// **Brave Search API**:

// - Free tier: 2,000 queries/month, 1 query/second
// - Implement caching for repeated queries
// - Batch similar claims when possible

// **Gemini API**:

// - Implement request batching for claim extraction
// - Use streaming responses for long transcripts
// - Set appropriate temperature (0.2-0.4 for factual tasks)

// ## Configuration & Environment

// ### Required Environment Variables

// Brave Search API
// BRAVE_API_KEY=your_brave_api_subscription_token

// Gemini API
// GEMINI_API_KEY=your_gemini_api_key

// Optional: Rate limiting
// MAX_CLAIMS_PER_VIDEO=50
// MAX_SEARCHES_PER_CLAIM=3
// REQUEST_TIMEOUT_MS=10000

// ---

// ---

// ## Integration with Supervisor Agent

// The Claim Verifying Agent outputs are consumed by the Supervisor Agent, which:

// 1. Aggregates claim verification results
// 2. Produces final summary of the claims & their verification report to persent to the user

// ### System Flow

// [YouTube Transcript]
// ↓
// [Claim Extraction (Gemini API)]
// ↓
// [Claim List with Context]
// ↓
// [For each claim: Search Query Generation]
// ↓
// [Brave Search API Call]
// ↓
// [Result Analysis & Verification]
// ↓
// [Verification Report (JSON)]
// ↓
// [Supervisor Agent]

// ---

// ## Architecture

// ### Technology Stack

// **LLM Integration**:

// - Gemini API for claim extraction and analysis
// - Function calling/tool use capability for search integration

// **Search Integration**:

// - Brave Search API for real-time fact verification
// - Endpoint: `https://api.search.brave.com/res/v1/web/search`

// **Data Pipeline**:

// - Input: YouTube transcript (extracted via yt-dlp or YouTube Transcript API)
// - Processing: Claim extraction → Verification → Report generation
// - Output: Structured JSON report with verification results
