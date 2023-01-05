const Menu = () => {
  return (
    <>
      <div className="w-10/12 fixed top-3 bg-[#202838]/30 border border-white rounded-xl px-4 backdrop-blur-md left-0 right-0 mx-auto flex z-[1000] justify-between items-center py-4">
        <div className="text-secondary  font-bold text-2xl">Deniyi</div>
        <div className="flex flex-col items-center gap-y-2">
          <div className="w-7 h-[2px] bg-leMon" />
          <div className="w-9 h-[2px] bg-leMon" />
          <div className="w-7 h-[2px] bg-leMon" />
        </div>
      </div>
    </>
  );
};

export default Menu;
