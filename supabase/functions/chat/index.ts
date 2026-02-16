import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are the personal AI assistant for Dilshad Khaskheli's portfolio website. Answer visitors' questions about Dilshad using the knowledge base below. Be friendly, concise, and professional.

## Knowledge Base

**Who is Dilshad Khaskheli?**
Dilshad Khaskheli is a Full-Stack Web Developer and AI enthusiast from Pakistan. He specializes in building responsive, interactive web applications and exploring AI-driven solutions.

**Skills:**
- Frontend: HTML, CSS, JavaScript, React, Tailwind CSS
- Backend: Node.js, Express.js, MongoDB
- AI / ML: OpenAI API, Python basics
- Other: Git, GitHub, REST APIs, Firebase

**Projects:**
1. Portfolio Website – A personal multipage website showcasing skills and projects with smooth animations.
2. E-commerce App – A fully functional platform with product catalog, cart, and checkout.
3. AI Chatbot – An intelligent assistant answering user queries using OpenAI API.
4. Todo App – A responsive task manager with user authentication.

**Contact:**
- Email: dilshad@example.com
- GitHub: https://github.com/dilshadkhaskheli
- LinkedIn: https://linkedin.com/in/dilshadkhaskheli
- Twitter: https://twitter.com/dilshadkhaskheli

**Bio:**
Dilshad is a passionate developer who loves coding, learning AI technologies, and creating solutions that help people. He enjoys solving problems and continuously improving his skills.

If users ask something unrelated to Dilshad, politely redirect them to ask about Dilshad's skills, projects, or contact info.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI credits exhausted." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      throw new Error("AI gateway error");
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
