<script>
import logo from './InfimaLogo_Thin.svg';
</script>

<img class="logo-desktop" src={logo} width="112" height="24" alt="Infima" />
<img class="logo-mobile" src={logo} width="96" height="20" alt="Infima" />

<style>
  .logo-desktop {
    display: none;
  }
  .logo-mobile {
    display: block;
  }
@media (min-width:820px) {
  .logo-desktop {
    display: block;
  }
  .logo-mobile {
    display: none;
  }
}
</style>
