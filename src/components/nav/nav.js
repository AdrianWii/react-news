import "./nav.css";

export function Nav() {
  return (
    <nav>
      <span>LOGO</span>

      <ul>
        <li>
          <i class="fa-solid fa-gauge"></i>
          DASHBOARD
        </li>
        <li>
          <i class="fa-solid fa-newspaper"></i>
          NEWS
        </li>
        <li>
          <i class="fa-solid fa-pizza-slice"></i>
          USERS
        </li>
      </ul>
    </nav>
  );
}
