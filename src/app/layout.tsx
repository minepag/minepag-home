import { type Metadata, type ServerRuntime } from 'next';
import { type PropsWithChildren } from 'react';

import { Providers } from './providers';

import './globals.css';

export const runtime: ServerRuntime = 'edge';

export const metadata: Metadata = {
  title: 'MinePag',
  description: 'Sistema para realizar vendas automaticamente em servidores de minecraft!',
  keywords: ['minepag', 'mine pag', 'mine-pag', 'venda', 'vender', 'servidor', 'minecraft', 'automaticamente']
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
