<script>
export let show = false;
</script>

{#if show}
  <nav class="mobile">
    <div class="nav-container">
      <ul>
        <li class="sub-menu products">

          <span>Products</span>

            <div class="dropdown">
              <ul>
                <li>
                  <a href="/products/infima-platform">Infima Platform</a>
                </li>
                <li>
                  <a href="/products/infima-libraries">Infima Libraries</a>
                </li>
                <li>
                  <a href="/products/infima-apis">Infima APIs</a>
                </li>
              </ul>
            </div>

        </li>

        <li class="sub-menu solutions">

          <span>Solutions</span>

            <div class="dropdown">
              <ul>
                <li>
                  <a href="/solutions/asset-managers">Asset Managers</a>
                </li>
                <li>
                  <a href="/solutions/dealers">Dealers</a>
                </li>
              </ul>
            </div>

        </li>

        <li class="sub-menu">

          <span>Insights</span>

            <div class="dropdown">
              <ul>
                <li>
                  <a href="/insights">Insights</a>
                </li>
              </ul>
            </div>

        </li>

        <li class="sub-menu solutions">

          <span>More</span>

            <div class="dropdown">
              <ul>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/news">News</a>
                </li>
              </ul>
            </div>

        </li>

      </ul>
    </div>
  </nav>
{/if}

<style>
  nav.mobile {
    display: flex;
    position: absolute;
    align-items: center;
    z-index: 9;
    top:0;
	  left:0;
    bottom:0;
    right: 0;
    font-size: 1.25rem;
    letter-spacing: .03rem;
  }

  nav.mobile.closed {
    display: none;
  }

  nav.mobile > .nav-container {
    position: fixed;
    overflow-y: scroll;
    top:0;
	  left:0;
    bottom:0;
    right: 0;
    background-color: rgba(var(--background-color-rgb), 1);
    padding: 1rem;
    padding-top: 2rem;
  }

  nav.mobile .nav-container > ul > li {
    width: 100%;
    margin: 4rem 0;
  }

  nav.mobile .nav-container > ul > li li {
    border-top: 1px solid;
    border-color: rgba(255,255,255,.15);
    padding: .5rem 0;
  }

  nav.mobile .nav-container > ul > li li:last-child {
    border-bottom: 1px solid;
    border-color: rgba(255,255,255,.15);
  }

  span {
    border-top: 1px solid rgba(255,255,255,.9);
    width: 100%;
    color: rgba(255,255,255,.5);
    padding: .5rem 0;
    display: inline-block;
    text-transform: lowercase;
    font-size: 1rem;
  }

  a {
    color: #fff;
  }

  @media (min-width:720px) {
		nav.mobile {
			display: none;
		}
	}
</style>
