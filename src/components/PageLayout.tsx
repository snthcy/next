import FadeIn from "react-fade-in";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <FadeIn className="flex flex-col justify-center min-h-screen">
      <div className="mx-8 md:mx-auto max-w-3xl mb-16">{children}</div>
    </FadeIn>
  );
}

