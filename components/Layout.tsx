type Props = {
  children: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }: Props) => (
  <main>
    <section className="text-gray-700 body-font overflow-hidden">
      <div className="container md:px-48 sm: px-12 py-10 mx-auto">
        <div className="-my-8">{children}</div>
      </div>
    </section>
  </main>
)
