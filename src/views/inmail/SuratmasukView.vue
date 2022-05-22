<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-10">
        <div class="card mt-2">
          <div class="card-header">
            <h3>Detail Surat Masuk</h3>
          </div>
          <!-- /.card-header -->

          <div class="card-body">
            <h5 class="text-center">
              POLRI DAERAH JAWA TIMUR<br />
              RESOR LAMONGAN SEKTOR SUKODADI
            </h5>
            <hr />

            <div class="form-group">
              <label for="tanggal">Tanggal</label>
              <p>{{  }}</p>
            </div>
            <div class="row">
              <div class="col-4">
                <div class="form-group">
                  <label for="noAgenda">Nomor Agenda</label>
                  <p>{{  }}</p>
                </div>
              </div>
              <div class="col-4">
                <div class="form-group">
                  <label for="noSurat">Nomor Surat</label>
                  <p>{{  }}</p>
                </div>
              </div>
              <div class="col-4">
                <div class="form-group">
                  <label for="tanggalSurat">Tanggal Surat</label>
                  <p>{{  }}</p>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="fileLampiran">Lampiran</label>
              <!-- <p>
                @if(inmail.lampiran != '-')
                <a href="" target="_blank">
                  {{ inmail.lampiran }}
                </a>
                @else
                {{ inmail.lampiran }}
                @endif
              </p> -->
            </div>
            <div class="row">
              <div class="col-4">
                <div class="form-group">
                  <label for="pengirim">Pengirim</label>
                  <p>{{  }}</p>
                </div>
              </div>
              <div class="col-4">
                <div class="form-group">
                  <label for="perihal">Perihal</label>
                  <p>{{  }}</p>
                </div>
              </div>
              <div class="col-4">
                <div class="form-group">
                  <label for="status">Status</label>
                  <p>{{  }}</p>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-8">
                <div class="form-group">
                  <label for="fileSurat">Upload File (pdf)</label>
                  <p>
                    <a href="" target="_blank">
                      {{  }}
                    </a>
                  </p>
                </div>
              </div>
              <div class="col-4">
                <div class="form-group">
                  <label for="fileSurat">Diteruskan</label>
                  <p>{{  }}</p>
                </div>
              </div>
            </div>
            <a href="/" class="btn btn-block btn-secondary">
              <i class="fas fa-arrow-circle-left"></i> Kembali
            </a>
          </div>
          <!-- /.card-body -->
        </div>
        <!-- /.card -->
      </div>
      <!-- /.col -->
    </div>
  
    <!-- /.row -->
  </div>
</template>