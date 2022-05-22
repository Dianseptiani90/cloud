<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <a href="/" class="brand-link">
      <img
        src="/adminlte/dist/img/AdminLTELogo.png"
        :alt="$store.state.app"
        class="brand-image img-circle elevation-3"
        style="opacity: 0.8"
      />
      <span class="brand-text font-weight-light">AdminLTE 3</span>
    </a>

    <div class="sidebar">
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img
            src="/adminlte/dist/img/user2-160x160.jpg"
            class="img-circle elevation-2"
            alt="User Image"
          />
        </div>
        <div class="info">
          <a href="#" class="d-block">Alexander Pierce</a>
        </div>
      </div>

      <div class="form-inline">
        <div class="input-group" data-widget="sidebar-search">
          <input
            class="form-control form-control-sidebar"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <div class="input-group-append">
            <button class="btn btn-sidebar">
              <i class="fas fa-search fa-fw"></i>
            </button>
          </div>
        </div>
      </div>

      <nav class="mt-2">
        <ul
          class="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <!-- <nav-item icon="fas fa-home" link="/"> Home </nav-item> -->
          <nav-item icon="fas fa-tachometer-alt" link="/dashboard">
            Dashboard
          </nav-item>
          <li class="nav-item menu">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-envelope"></i>
              <p>
                Surat Masuk
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <nav-item icon="fas fa-circle" link="/inmaillist">
                  Daftar Surat Masuk
                </nav-item>
              </li>
              <li class="nav-item">
                <nav-item icon="fas fa-circle" link="/disposisi">
                  Disposisi Surat Masuk
                </nav-item>
              </li>
            </ul>
          </li>
          <nav-item icon="fas fa-arrow-right" link="/outmaillist">
            Surat Keluar
          </nav-item>
          <li class="nav-item menu">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-file"></i>
              <p>
                Laporan
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <nav-item icon="fas fa-circle" link="/inmailreport">
                  Laporan Surat Masuk
                </nav-item>
              </li>
              <li class="nav-item">
                <nav-item icon="fas fa-circle" link="/outmailreport">
                  Laporan Surat Keluar
                </nav-item>
              </li>
            </ul>
          </li>
          <nav-item icon="fas fa-user" link="/userlist">
            Data Pengguna
          </nav-item>
          <nav-item icon="fas fa-info-circle" link="/about"> About </nav-item>
          <!-- <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Dashboard
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
          <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="../../index.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Dashboard v1</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="../../index2.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Dashboard v2</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="../../index3.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Dashboard v3</p>
                </a>
              </li>
            </ul>
          </li> -->
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script>
import NavItem from "./NavItem.vue";
export default {
  components: {
    NavItem,
  },
};
</script>