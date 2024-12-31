
export default function CardSection() {
    const cards = [
      { title: 'Training Courses', description: 'The gradual accumulation Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', bgColor: 'bg-red-100' },
      { title: '2,769 Online Courses', description: 'The gradual accumulation Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', bgColor: 'bg-green-100' },
      { title: 'Training Courses', description: 'The gradual accumulation Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.', bgColor: 'bg-blue-100' },
    ];
  
    return (
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-darkBlue">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${card.bgColor} p-6 rounded shadow-lg text-darkBlue`}
          >
            <div className="ml-4 mt-2 h-20 w-16 bg-pink-400 rounded">

            </div>
            <h3 className="text-lg font-bold mb-2 mt-10">{card.title}</h3>
            <p className="text-sm text-gray-700 mt-6">{card.description}</p>
          </div>
        ))}
      </section>
    );
  }
  