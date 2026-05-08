from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI(title="Portfolio API")

# Allow CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins for development
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Project(BaseModel):
    id: int
    title: str
    description: str
    tech_stack: List[str]
    github_url: Optional[str] = None
    demo_url: Optional[str] = None

class Skill(BaseModel):
    category: str
    items: List[str]

class Contact(BaseModel):
    name: str
    email: str
    message: str

# Mock data
projects_data = [
    {
        "id": 1,
        "title": "AI Travel Planner for Students",
        "description": "An AI-powered travel planner that generates personalized student-friendly itineraries using Google Gemini.",
        "tech_stack": ["MongoDB", "Google Gemini API", "AI Integration"],
        "demo_url": "https://travel-planner-jrms.vercel.app/"
    },
    {
        "id": 2,
        "title": "Super Resolution GAN",
        "description": "A deep learning model using Generative Adversarial Networks (GANs) to upscale and enhance the resolution of low-quality images.",
        "tech_stack": ["Python", "Deep Learning", "GANs", "Computer Vision"]
    },
    {
        "id": 3,
        "title": "One stop personalised career and education advisor",
        "description": "An intelligent platform designed to provide personalized career and education guidance tailored to individual user profiles.",
        "tech_stack": ["Next.js", "Genkit AI", "Firebase", "Interactive Maps"],
        "demo_url": "https://sih-final-imps.vercel.app/"
    }
]

skills_data = [
    {
        "category": "Languages",
        "items": ["Python", "JavaScript (Basic)", "TypeScript"]
    },
    {
        "category": "Frameworks & Libraries",
        "items": ["FastAPI", "React.js", "Pandas", "NumPy"]
    },
    {
        "category": "Databases & Cloud",
        "items": ["MySQL", "MongoDB", "Firebase", "Azure Cosmos DB", "Microsoft Azure"]
    },
    {
        "category": "Tools & Platforms",
        "items": ["GitHub", "VS Code", "Jupyter Notebook", "Google Colab"]
    },
    {
        "category": "Concepts & Technologies",
        "items": ["OOP", "DSA", "API Integration", "CNN"]
    }
]

@app.get("/api/projects", response_model=List[Project])
async def get_projects():
    return projects_data

@app.get("/api/skills", response_model=List[Skill])
async def get_skills():
    return skills_data

@app.post("/api/contact")
async def submit_contact(contact: Contact):
    # Here you would typically save to a DB or send an email
    return {"message": f"Thank you {contact.name} for reaching out! I will get back to you soon."}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
