import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PawPrint, Heart, Home } from "lucide-react";

const dogBreeds = [
  { name: "Labrador Retriever", description: "Friendly and outgoing" },
  { name: "German Shepherd", description: "Intelligent and versatile" },
  { name: "Golden Retriever", description: "Gentle and affectionate" },
  { name: "Bulldog", description: "Calm and courageous" },
];

const benefits = [
  { icon: <Heart className="h-6 w-6" />, title: "Companionship", description: "Dogs provide loyal friendship and emotional support." },
  { icon: <PawPrint className="h-6 w-6" />, title: "Exercise", description: "Regular walks and playtime keep you active and healthy." },
  { icon: <Home className="h-6 w-6" />, title: "Home Security", description: "Dogs can alert you to potential dangers and deter intruders." },
];

const Index = () => {
  const [selectedBreed, setSelectedBreed] = useState(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to the World of Dogs</h1>
        <p className="text-xl text-gray-600">Discover the joy and companionship of man's best friend</p>
      </header>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Popular Dog Breeds</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dogBreeds.map((breed) => (
            <Card key={breed.name} className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setSelectedBreed(breed)}>
              <CardHeader>
                <CardTitle>{breed.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{breed.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        {selectedBreed && (
          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">You selected: {selectedBreed.name}</h3>
            <p>{selectedBreed.description}</p>
          </div>
        )}
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Benefits of Owning a Dog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <Card key={benefit.title}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  {benefit.icon}
                  <span className="ml-2">{benefit.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{benefit.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-6">Ready to Bring Home a Furry Friend?</h2>
        <p className="mb-6">Consider adopting a dog from your local shelter and give a loving home to a dog in need.</p>
        <Button size="lg">Find a Dog to Adopt</Button>
      </section>
    </div>
  );
};

export default Index;
