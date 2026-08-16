import { ArrowLeft } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center py-32">
      <Container className="max-w-lg text-center">
        <p className="mono-nums text-sm font-medium text-accent">404</p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
          This page doesn&apos;t exist.
        </h1>
        <p className="mt-3 text-base text-fg-muted">
          The page you&apos;re looking for may have been moved or removed.
        </p>
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/">
            <ArrowLeft className="h-4 w-4" /> Back to home
          </ButtonLink>
        </div>
      </Container>
    </div>
  );
}
