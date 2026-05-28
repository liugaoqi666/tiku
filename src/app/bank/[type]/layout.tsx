export function generateStaticParams() {
  return [
    { type: 'api' },
    { type: 'function' },
    { type: 'python' },
    { type: 'all' },
  ]
}

export default function BankLayout({ children }: { children: React.ReactNode }) {
  return children
}
