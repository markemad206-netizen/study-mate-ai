# StudyMate AI

A beginner-friendly AI study assistant website.

## Run the backend

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
fastapi dev main.py
```

Open the API at http://127.0.0.1:8000/docs.

## Run the frontend

Open `frontend/index.html` with VS Code Live Server, or use another local static server.

The frontend expects the backend at:

http://127.0.0.1:8000/api/chat

## Next milestones

1. Connect a real AI API securely on the backend.
2. Add quiz generation with validated JSON.
3. Add SQLite and user accounts.
4. Add file/image questions.
5. Add deployment, rate limits, and stronger security.
