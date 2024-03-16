import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="flex h-[100dvh] flex-col items-center justify-center pb-10 pt-20">
      <p className="text-md px-20">
        Hi, I love writing poetry. <br />
        I hope you enjoy reading it. 🙃 <br />
        <Link href="/poems" className="underline">
          Let&apos;s have a look
        </Link>
      </p>

      {/* 
      <ul className="flex flex-col gap-8 px-10">
        {paths.map(({ label, href }, index) => (
          <li key={index}>
            <Link
              href={href}
              className="block text-9xl pt-8 font-bold hover:underline text-foreground/50 hover:text-foreground/100 transition-all border-t"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul> */}
    </main>
  )
}
