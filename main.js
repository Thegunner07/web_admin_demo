import "./assets/css/style.css";
import { setupCounter } from "./assets/js/counter.js";

document.querySelector("#app").innerHTML = `
  <div class="main">
    <header>
      <h1>Ngage Admin</h1>
      <div class="user-grouping">
        <span>Place Holder</span>
        <i class="fa-solid fa-user"></i>
      </div>
    </header>
    <main>
      <nav>
        <div class="menu-grouping">
          <div class="menu-img"></div>
          <i class="fa-solid fa-shoe-prints"></i>
          <span class="menu-name">Leads Manager</span>
        </div>
        <div class="menu-grouping">
          <div class="menu-img"></div>
          <i class="fa-solid fa-chalkboard-user"></i>
          <span class="menu-name">Canned Messages</span>
        </div>
      </nav>
      <section>
          <div class= "search-engine-container"
              <div class="search-by-client">Search by Client</div>
              <div class="search">Search</div>
              <div class="select the search type">Select The Search Type</div>
              <div class="Next-Page"></div>
              <div class="Unlinked Site">Unlinked Sites</div>


          </div>
      </section>
   



    </main>
  </div>
`;

// setupCounter(document.querySelector('#counter'))
