import React from "react";
import { useSelector } from "react-redux";

const Component = () => {
  const currentPath = useSelector((state) => state.app.path);
  const previousComponent = useSelector((state) => state.app.previousComponent);

  return (
    <div className="block">
      <h1>{currentPath}</h1>

      
      {previousComponent && <p>предыдуший: {previousComponent}</p>}





      <p className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi velit id incidunt vero laudantium ipsa expedita minus exercitationem deserunt illum. Dolores mollitia esse impedit deserunt doloribus neque illo sequi saepe assumenda, adipisci quae aspernatur voluptatem id autem consequuntur odit? Mollitia consequuntur aliquid laboriosam quasi hic tempora accusamus magnam pariatur in vel, obcaecati atque, voluptas numquam, eligendi temporibus totam quis aspernatur dolores. Natus inventore, aliquid aspernatur iste, id adipisci, nam consequatur vero accusamus aut sed? Quam vero suscipit necessitatibus soluta corporis, consequuntur aliquam cumque et? Porro quod voluptates velit praesentium dolorum. Veniam quia ex vitae. Dolor nemo atque sint nisi est!</p>
    </div>
  );
};

export default Component;
