type StepCardProps = {
  title: string;
  description: string;
};

export default function StepCard({ title, description }: StepCardProps) {
  return (
    <div className="w-full p-10 bg-[#eaedf7] text-[#1B2340]">
      <h4 className="text-xl p-2">{title}</h4>
      <p className="p-2">{description}</p>
    </div>
  );
}
