import { Link } from "react-router-dom";
import { Github, Mail } from "lucide-react";
import Logo from "./Logo";

const SiteFooter = () => {
  return (
    <footer className="mt-32 border-t border-border/60 bg-surface/40">
      <div className="container-wide grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo variant="compact" className="text-xl" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Объединение инженеров, деврелов и менеджеров технобренда малых и средних
            ИТ-компаний. Делаем смоллтех привлекательным — через коллаборацию, а не конкуренцию.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Разделы
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/manifesto" className="link-underline">Манифест</Link></li>
            <li><Link to="/research" className="link-underline">Исследование и программа</Link></li>
            <li><Link to="/community" className="link-underline">Сообщество</Link></li>
            <li><Link to="/partnership" className="link-underline">Партнёрство</Link></li>
            <li><Link to="/join" className="link-underline">Участвовать</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Партнёры
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="https://ontico.ru" target="_blank" rel="noreferrer" className="link-underline">
                Онтико
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Контакт
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="https://github.com/picksi7/Smalltech" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 link-underline">
                <Github className="h-4 w-4" /> GitHub
              </a>
            </li>
            <li>
              <a href="mailto:small.tech.conf@gmail.com" className="inline-flex items-center gap-2 link-underline">
                <Mail className="h-4 w-4" /> small.tech.conf@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="container-wide flex flex-col items-start justify-between gap-3 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Смоллтех сообщество. Сайт открыт к контрибьютам.</p>
          <p className="font-mono-tech">v0.1 · public beta</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
