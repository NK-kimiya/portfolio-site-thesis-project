type ContentSectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function ContentSection({
  title,
  children,
}: ContentSectionProps) {
  return (
    <section className="border-t border-[#F0F1FC] w-full lg:w-[980px] mx-auto my-10">
      <h3 className="text-2xl text-[#2a4073] p-2">{title}</h3>

      {children}
    </section>
  );
}
