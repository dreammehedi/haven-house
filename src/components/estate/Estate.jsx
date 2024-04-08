import EstateCart from "./EstateCart";

function Estate() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-6 md:gap-8">
      <EstateCart></EstateCart>
      <EstateCart></EstateCart>
      <EstateCart></EstateCart>
      <EstateCart></EstateCart>
      <EstateCart></EstateCart>
    </div>
  );
}

export default Estate;
