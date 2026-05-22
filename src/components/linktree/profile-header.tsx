import profileImg from "@/assets/profile.jpg";
import { profile } from "./links-data";

export function ProfileHeader() {
  return (
    <header className="flex flex-col items-center text-center animate-fade-up">
      <div className="relative">
        <div
          className="absolute -inset-1 rounded-full opacity-60 blur-md"
          style={{ background: "var(--gradient-primary)" }}
          aria-hidden
        />
        <img
          src={profileImg}
          alt={`${profile.name} portrait`}
          width={112}
          height={112}
          className="relative h-28 w-28 rounded-full object-cover ring-4 ring-background shadow-[var(--shadow-card)]"
        />
      </div>
      <h1 className="mt-5 text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
        {profile.name}
      </h1>
      <p className="mt-1 text-sm text-muted-foreground">{profile.handle}</p>
      <p className="mt-3 max-w-md text-pretty text-[15px] leading-relaxed text-foreground/80">
        {profile.bio}
      </p>
    </header>
  );
}