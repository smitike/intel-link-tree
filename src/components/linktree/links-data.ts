import { FileText, Linkedin, Github, BookOpen, Rocket, type LucideIcon } from "lucide-react";

export type LinkItem = {
  id: string;
  title: string;
  url: string;
  description: string;
  icon: LucideIcon;
  /** Hidden metadata used by the AI-assisted smart search. */
  metadata: {
    keywords: string[];
    /** Map of keyword -> short, human explanation of why this link matches. */
    explanations: Record<string, string>;
  };
};

export const links: LinkItem[] = [
  {
    id: "resume",
    title: "Resume",
    url: "https://example.com/resume.pdf",
    description: "Full work history, skills, and education",
    icon: FileText,
    metadata: {
      keywords: [
        "kubernetes", "k8s", "docker", "devops", "aiea", "virtual desktops",
        "research", "typescript", "react", "node", "aws", "cloud",
        "internship", "experience", "work", "leadership",
      ],
      explanations: {
        kubernetes:
          "Worked with Kubernetes to deploy virtual desktops during their AIEA research membership.",
        k8s:
          "Used K8s for orchestrating virtual desktop pods as part of AIEA research.",
        docker:
          "Containerized research workloads with Docker before shipping to Kubernetes.",
        devops:
          "Built CI/CD pipelines and managed infra during multiple internships — full timeline on the resume.",
        aiea:
          "Member of the AIEA research group — deployed virtual desktops on Kubernetes.",
        "virtual desktops":
          "Deployed virtual desktops on Kubernetes as part of AIEA research.",
        typescript:
          "Primary language across most recent roles — see the experience section.",
        react:
          "Several years of production React experience listed under work history.",
        node:
          "Backend services with Node.js across internships and side projects.",
        aws:
          "AWS infra (EC2, S3, Lambda) used in prior internships.",
        cloud:
          "Cloud infra experience spans AWS and self-hosted Kubernetes clusters.",
        internship:
          "All internships, dates, and stacks are documented on the resume.",
        experience:
          "Complete professional history with stacks and impact lives on the resume.",
        leadership:
          "Led small teams during research and hackathon projects — see resume highlights.",
      },
    },
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    url: "https://linkedin.com/in/example",
    description: "Professional network and endorsements",
    icon: Linkedin,
    metadata: {
      keywords: ["network", "recommendations", "endorsements", "connect", "linkedin", "career"],
      explanations: {
        network: "Best place to connect and see mutual contacts.",
        recommendations: "Public recommendations from past managers and teammates.",
        endorsements: "Skill endorsements from colleagues live on LinkedIn.",
        connect: "Send a connection request on LinkedIn.",
        career: "High-level career timeline and education on LinkedIn.",
      },
    },
  },
  {
    id: "github",
    title: "GitHub",
    url: "https://github.com/example",
    description: "Open-source projects and contributions",
    icon: Github,
    metadata: {
      keywords: [
        "open source", "code", "projects", "typescript", "python", "rust",
        "side projects", "contributions", "github", "repos",
      ],
      explanations: {
        "open source":
          "All public open-source contributions are pinned on GitHub.",
        code: "Browse repos and recent commits on GitHub.",
        projects:
          "Personal side projects, including CLI tools and web apps, live on GitHub.",
        python: "Several Python projects pinned on GitHub.",
        rust: "Experimental Rust projects available on GitHub.",
        contributions: "PRs to popular OSS libraries are visible on the GitHub profile.",
        repos: "All public repositories live on GitHub.",
      },
    },
  },
  {
    id: "research",
    title: "Research Paper",
    url: "#",
    description: "Unpublished — AIEA research, available on request",
    icon: BookOpen,
    metadata: {
      keywords: [
        "research", "paper", "aiea", "ml", "machine learning", "ai",
        "kubernetes", "virtual desktops", "academic", "publication",
      ],
      explanations: {
        research:
          "Co-authored research from the AIEA group — not yet published, available on request.",
        paper:
          "Draft paper from AIEA research membership — reach out for a copy.",
        aiea:
          "Core deliverable of the AIEA research membership.",
        ml:
          "Research explores ML workloads on virtualized desktop infrastructure.",
        "machine learning":
          "Paper covers ML workloads running on Kubernetes-backed virtual desktops.",
        ai: "AI research conducted as part of the AIEA group.",
        academic: "Academic work — not yet published.",
      },
    },
  },
  {
    id: "hackathon",
    title: "Hackathon Project",
    url: "https://example.com/hackathon",
    description: "Award-winning weekend build",
    icon: Rocket,
    metadata: {
      keywords: [
        "hackathon", "prototype", "react", "ai", "design", "ui",
        "frontend", "demo", "award", "winner",
      ],
      explanations: {
        hackathon: "48-hour project shipped at a recent hackathon.",
        prototype: "Fast end-to-end prototype with real-time UI.",
        react: "Built with React and Vite for the frontend.",
        ai: "Integrates an AI assistant for natural-language queries.",
        design: "Custom design system shipped in a weekend.",
        ui: "Polished UI built under hackathon time pressure.",
        frontend: "Frontend-heavy project — see the live demo.",
        award: "Won a category prize at the hackathon.",
      },
    },
  },
];

export const profile = {
  name: "Alex Chen",
  bio: "Software engineer · AIEA researcher · building thoughtful interfaces.",
  handle: "@alexchen",
};