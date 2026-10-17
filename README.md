# Julya Caroline Ferreira — Biomedicina e Estética

Portfólio profissional de Julya Caroline Ferreira, em Blumenau, SC. Código e design adaptados de [MatheusPieta/biometic](https://github.com/MatheusPieta/biometic), commit b2c037227c63f25a78ab832532c43b742428696b.

## Desenvolvimento

Requisitos: Node.js 20.9 ou superior e pnpm.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Abra http://localhost:3000. Para verificar a versão de produção:

```sh
pnpm typecheck
pnpm build
pnpm start
```

## Conteúdo

- lib/site.ts: nome, cidade, WhatsApp, navegação e procedimentos.
- components/science-section.tsx: formação FURB, IOA e NES.
- components/testimonials-section.tsx: estudo acadêmico de microagulhamento associado ao PDRN. O nome do arquivo foi preservado da base, mas não contém depoimentos de pacientes.
- components/mission-section.tsx: apresentação profissional.
- public/images/julya/: fotografias fornecidas para o projeto, convertidas para WebP. Originais preservados na pasta de origem.

O conteúdo distingue a habilitação em análises clínicas, o técnico concluído e a pós-graduação em andamento. Não foram inventados registros, datas, publicações, estatísticas, pacientes ou resultados. O tema do TCC é descritivo; título formal e dados adicionais poderão ser incluídos quando fornecidos.

## Fidelidade à base

Preservados: Next.js App Router, DM Sans e Fraunces, paleta verde/creme, navegação flutuante, hero fotográfico, cartões arredondados, seção verde de credenciais e bloco final com imagem.

Adaptados: identidade, fotografias, textos, links e função das seções. Corrigidos o tamanho fixo do texto animado no celular, o desfoque que podia ocultar títulos longos e botões sem destino. Animações respeitam a preferência por movimento reduzido.

O override de electron-to-chromium para 1.5.456 mantém a dependência transitiva compatível com a política de idade mínima de publicação.
