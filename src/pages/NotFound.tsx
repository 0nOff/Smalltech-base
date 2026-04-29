import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <section className="container-wide flex min-h-[70vh] items-center py-24">
      <div className="max-w-xl">
        <p className="font-mono-tech text-sm text-primary">404</p>
        <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
          Эта страница вне повестки.
        </h1>
        <p className="mt-4 text-base text-muted-foreground">
          Возможно, ссылка устарела или раздел ещё в работе. Вернитесь на главную или
          посмотрите карту разделов.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-gradient-amber px-6 text-sm font-medium text-primary-foreground shadow-glow"
        >
          <ArrowLeft className="h-4 w-4" /> На главную
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
