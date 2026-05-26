const Footer = ({ list }) => {
  const trueList = list.filter((task) => task.check === true); //Cree une liste de tache qui ont ete chocher
  const truenumber = trueList.length; // le nombre de tache chocher
  const falsenumber = list.length - truenumber; // nombre de tache non chocher

  return (
    <>
      {" "}
      {list.length ? (
        <div className="bg-gray-800 font-bold max-sm:text-sm">
          <h3>
            {" "}
            Tu as elimine{" "}
            <span className="font-black text-green-600">
              {truenumber}
            </span> /{" "}
            <span className="text-red-700 font-black">{list.length}</span> tache
            {truenumber > 1 ? "s" : ""}
          </h3>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Footer;
