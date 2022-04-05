<script>
import { fade } from 'svelte/transition';
export let show = false;
</script>

{#if show}
  <nav class="mobile" in:fade="{{ duration: 100 }}" out:fade="{{ delay: 100, duration: 100 }}">
    <div class="nav-container">
      <ul>
        <li class="sub-menu products">

          <span>Products</span>

            <div class="dropdown">
              <ul>
                <li>
                  <a href="/products/infima-platform" on:click={() => show = !show}>Infima Platform</a>
                </li>
                <li>
                  <a href="/products/infima-libraries" on:click={() => show = !show}>Infima Libraries</a>
                </li>
                <li>
                  <a href="/products/infima-apis" on:click={() => show = !show}>Infima APIs</a>
                </li>
              </ul>
            </div>

        </li>

        <li class="sub-menu solutions">

          <span>Solutions</span>

            <div class="dropdown">
              <ul>
                <li>
                  <a href="/solutions/asset-managers" on:click={() => show = !show}>Asset Managers</a>
                </li>
                <li>
                  <a href="/solutions/dealers" on:click={() => show = !show}>Dealers</a>
                </li>
              </ul>
            </div>

        </li>

        <li class="sub-menu">

          <span>Insights</span>

            <div class="dropdown">
              <ul>
                <li>
                  <a href="/insights" on:click={() => show = !show}>Insights</a>
                </li>
              </ul>
            </div>

        </li>

        <li class="sub-menu solutions">

          <span>More</span>

            <div class="dropdown">
              <ul>
                <li>
                  <a href="/about" on:click={() => show = !show}>About</a>
                </li>
                <li>
                  <a href="/news" on:click={() => show = !show}>News</a>
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
    font-size: 1.1rem;
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
    padding: 0 2.8rem;
    padding-top: 3rem;
  }

  nav.mobile .nav-container > ul > li {
    width: 100%;
    margin: 1.25rem 0;
  }

  nav.mobile .nav-container > ul > li li {
    border-top: 1px solid;
    border-color: rgba(255,255,255,.15);
  }

  nav.mobile .nav-container > ul > li li:last-child {
    border-bottom: 1px solid;
    border-color: rgba(255,255,255,.15);
  }

  span {
    width: 100%;
    color: rgba(255,255,255,.5);
    padding: .5rem 0;
    display: inline-block;
    text-transform: lowercase;
    font-size: 1rem;
    letter-spacing: .03rem;
  }

  a {
    color: #fff;
    padding: .65rem 0 .8rem;
    display: inline-block;
    width: 100%;
    text-decoration: none;
    line-height: 1;
    letter-spacing: .02rem;
  }

  @media (min-width:720px) {
		nav.mobile {
			display: none;
		}
	}
</style>
