---
applyTo: "**"
---

# Copilot — main overview (stack, principles, workflow)

Stack
- Next.js 15 (App Router), React 19, TypeScript 5, Tailwind 4 + Shadcn
- Node.js 20+
- Use a tool #context7 para consultar a documentação dos pacotes
- Use a tool #shadcn para requisitar, consultar, configurar e personalizar componentes da UI.
- Use a tool #todos para gerenciar tarefas e lembretes.
- Use a tool #think para raciocinar sobre problemas complexos e gerar soluções.
- Os arquivos .mdx usam o Github Flavored Markdown (GFM).


Principles
- Production quality: simples > complexo, explícito > implícito.
- Tipos explícitos (nunca fazer referência a `any`); funções pequenas e determinísticas.
- Fail fast: validação cedo, mensagens claras.
- Comentários apenas quando lógica não é óbvia.
- UI consistente e acessível. Use auto layout e espaçamento consistente. Prefira uma abordagem responsiva e mobile-first.
- Prefira páginas page.tsx enxutas e objetivas: busque reutilizar componentes de src/components/**/*.tsx à implementar manualmente todos os elementos na página.
