<template>
  <content-header title="Dashboard" />
  <content>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-4 col-6">
          <!-- small box -->
          <div class="small-box bg-info">
            <div class="inner">
              <h3>
                {{ jumlah_suratmasuk }} <sup style="font-size: 20px">%</sup>
              </h3>
              <h4>Surat Masuk</h4>
            </div>
            <div class="icon">
              <i class="far fa-envelope"></i>
            </div>
            <a href="/" class="small-box-footer"
              >Selengkapnya <i class="fas fa-arrow-circle-right"></i
            ></a>
          </div>
        </div>
        <div class="col-lg-4 col-6">
          <div class="small-box bg-success">
            <div class="inner">
              <h3>
                  {{ jumlah_suratkeluar }} <sup style="font-size: 20px">%</sup>
              </h3>
              <h4>Surat Keluar</h4>
            </div>
            <div class="icon">
              <i class="fas fa-share"></i>
            </div>
            <a href="#" class="small-box-footer"
              >Selengkapnya <i class="fas fa-arrow-circle-right"></i
            ></a>
          </div>
        </div>
        <div class="col-lg-4 col-6">
          <div class="small-box bg-warning">
            <div class="inner">
              <h3>
                  {{ jumlah_pengguna }} <sup style="font-size: 20px">%</sup>
              </h3>
              <h4>Data Pengguna</h4>
            </div>
            <div class="icon">
              <i class="ion ion-person"></i>
            </div>
            <a href="/" class="small-box-footer"
              >Selengkapnya <i class="fas fa-arrow-circle-right"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </content>
</template>

