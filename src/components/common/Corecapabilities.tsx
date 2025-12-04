type Props = {
  title: string;
  capabilities: string[];
};

const CoreCapabilities = ({ title, capabilities }: Props) => {
  return (
    <section className="px-4 py-12 bg-[#F7F9FC]">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        {title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {capabilities.map((item, index) => {
          const [boldPart, ...rest] = item.split(":");
          const normalPart = rest.join(":");
          return (
            <div key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 mt-2 pt-1.5 bg-orange-400 rounded-full flex-shrink-0" />
              <p className="text-gray-800 text-lg leading-relaxed">
                <strong>{boldPart}:</strong>
                {normalPart}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CoreCapabilities;
