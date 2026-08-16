import { Suspense } from "react";
import { Hero } from "@/components/sections/Hero";
import { TrustStats } from "@/components/sections/TrustStats";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { SystemsIBuild } from "@/components/sections/SystemsIBuild";
import { Projects } from "@/components/sections/Projects";
import { TechStack } from "@/components/sections/TechStack";
import { Capabilities } from "@/components/sections/Capabilities";
import { GitHubSection } from "@/components/sections/GitHubSection";
import { GitHubSkeleton } from "@/components/github/GitHubSkeleton";
import { ResumeCTA } from "@/components/sections/ResumeCTA";
import { Contact } from "@/components/sections/Contact";
import { Container } from "@/components/ui/Container";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStats />
      <About />
      <Experience />
      <SystemsIBuild />
      <Projects />
      <TechStack />
      <Capabilities />
      <Suspense
        fallback={
          <section className="py-20 sm:py-28">
            <Container>
              <GitHubSkeleton />
            </Container>
          </section>
        }
      >
        <GitHubSection />
      </Suspense>
      <ResumeCTA />
      <Contact />
    </>
  );
}
