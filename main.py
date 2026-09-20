from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="StudyMate AI API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Restrict this before production deployment.
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str
    subject: str = "General"

@app.get("/")
def root():
    return {"status": "StudyMate AI backend is running"}

@app.post("/api/chat")
def chat(request: ChatRequest):
    # Temporary demo response. Replace this with a real AI provider later.
    reply = (
        f"You're studying {request.subject}.\\n\\n"
        f"You asked: {request.message}\\n\\n"
        "This is the demo backend response. Next, we will connect a real AI model "
        "and add quizzes, accounts, and saved progress."
    )
    return {"reply": reply}
