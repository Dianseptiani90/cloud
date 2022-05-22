<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-10">
        <div class="card mt-2">
          <div class="card-header">
            <!-- @if(flashMessage('notification'))
                    <div class="alert alert-success">{{ flashMessage('notification') }}</div>
                  @endif -->
            <div class="row">
              <div class="col-10">
                <h3>Daftar Surat Masuk</h3>
              </div>
              <div class="col-2">
                <button
                  type="button"
                  class="btn btn-block btn-primary"
                  data-toggle="modal"
                  data-target="#modal-add-inmails"
                >
                  <i class="fas fa-plus"></i> Tambah
                </button>
              </div>
            </div>
          </div>
          <!-- /.card-header -->

          <div class="card-body">
            <table id="tabel" class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Tanggal</th>
                  <th>No. Agenda</th>
                  <th>Pengirim</th>
                  <th>Diteruskan</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="inmail in inmails" :key="inmail.id">
                        <td>{{ inmail.tgl }}</td>
                        <td>{{ inmail.no_agenda }}</td>
                        <td>{{ inmail.pengirim }}</td>
                        <td>{{ inmail.diteruskan }}</td>
                        <td>
                          <template v-if="inmail.status === 'Selesai'">
                           <span class="badge bg-success">{{ inmail.status }}</span>
                          </template>
                          <template v-else>
                           <span class="badge bg-warning">{{ inmail.status }}</span>
                          </template>
                          </td>
                        <td>
                          <a href="{{ route('inmail.show', { id : inmail.id }) }}" class="mr-2">
                            <i class="fas fa-arrow-circle-right text-secondary"></i>
                          </a>
                          <a href="{{ route('inmail.disposition', { id : inmail.id }) }}">
                            <i class="fas fa-archive text-success"></i>
                          </a><br/>
                          <a href="{{ route('inmail.edit', { id : inmail.id }) }}" class="mr-2">
                            <i class="fas fa-edit text-warning"></i>
                          </a>
                          <a href="{{ route('inmail.delete', { id : inmail.id }) }}" onclick="konfirmasiHapus()">
                            <i class="fas fa-trash text-danger"></i>
                          </a>
                        </td>
                      </tr>
                      
              </tbody>
              <tfoot>
                <tr>
                  <th>Tanggal</th>
                  <th>No. Agenda</th>
                  <th>Pengirim</th>
                  <th>Diteruskan</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </tfoot>
            </table>
          </div>
          <!-- /.card-body -->
        </div>
        <!-- /.card -->
      </div>
      <!-- /.col -->

      <!-- col-2 -->
      <div class="col-2">
        <div class="card bg-success mt-2">
          <div class="card-body">
            <h2>
              <b>{{ selesai }}</b>
            </h2>
            <h6>Selesai</h6>
          </div>
        </div>

        <div class="card bg-warning mt-2">
          <div class="card-body">
            <h2>
              <b>{{ proses }}</b>
            </h2>
            <h6>Proses</h6>
          </div>
        </div>
      </div>
    </div>
    <!-- /.row -->
  </div>

  <!-- add-inmails-modal -->
  <div class="modal fade" id="modal-add-inmails">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Tambah Surat Masuk</h4>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <h5 class="text-center">
            POLRI DAERAH JAWA TIMUR<br />
            RESOR LAMONGAN SEKTOR SUKODADI
          </h5>
          <hr />

          <form action="{{  }}" method="POST" enctype="multipart/form-data">
            <!-- {{ csrfField() }} -->
            <div class="form-group">
              <label for="tanggal">Tanggal</label>
              <input
                type="date"
                class="form-control"
                id="tanggal"
                name="tanggal"
              />
            </div>
            <div class="form-group">
              <label for="noAgenda">Nomor Agenda</label>
              <input
                type="text"
                class="form-control"
                id="noAgendaSM"
                name="noAgenda"
                placeholder="tipe_surat/nomor_urut_surat/bulan/tahun"
              />
            </div>
            <div class="form-group">
              <label for="noSurat">Nomor Surat</label>
              <input
                type="text"
                class="form-control"
                id="noSurat"
                name="noSurat"
                placeholder="Nomor surat"
              />
            </div>
            <div class="form-group">
              <label for="tanggalSurat">Tanggal Surat</label>
              <input
                type="date"
                class="form-control"
                id="tanggalSurat"
                name="tanggalSurat"
              />
            </div>
            <div class="form-group">
              <label for="fileLampiran">Lampiran</label>
              <div class="custom-file">
                <input
                  type="file"
                  class="custom-file-input"
                  id="fileLampiran"
                  name="fileLampiran"
                />
                <label class="custom-file-label" for="fileLampiran"
                  >Upload File Lampiran</label
                >
              </div>
            </div>
            <div class="form-group">
              <label for="pengirim">Pengirim</label>
              <input
                type="text"
                class="form-control"
                id="pengirim"
                name="pengirim"
                placeholder="Pengirim surat"
              />
            </div>
            <div class="form-group">
              <label for="perihal">Perihal</label>
              <input
                type="text"
                class="form-control"
                id="perihal"
                name="perihal"
                placeholder="Perihal surat"
              />
            </div>
            <div class="form-group">
              <label for="status">Status</label>
              <select class="form-control" id="status" name="status">
                <option value="Menunggu Konfirmasi">Menunggu Konfirmasi</option>
                <option value="Selesai">Selesai</option>
              </select>
            </div>
            <div class="form-group">
              <label for="fileSurat">Upload File (pdf)</label>
              <div class="custom-file">
                <input
                  type="file"
                  class="custom-file-input"
                  id="fileSurat"
                  name="fileSurat"
                />
                <label class="custom-file-label" for="fileSurat"
                  >Upload File Surat Masuk</label
                >
              </div>
            </div>
            <div class="modal-footer justify-content-between">
              <button
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
              >
                Tutup
              </button>
              <button type="submit" class="btn btn-primary">Simpan</button>
            </div>
          </form>
        </div>
      </div>
      <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
  </div>
  <!-- /.add-inmails-modal -->
</template>

<script>
export default {
    data() {
    return {
      inmails: [
        {
          id: 1,
          tgl: '11-05-2022',
          no_agenda: '001',
          pengirim: 'Kantor Desa Telogerejo',
          diteruskan : 'SIUM',
          status : 'Selesai',
        },
        {
          id: 2,
          tgl: '11-05-2022',
          no_agenda: '002',
          pengirim: 'Kantor Desa Aren',
          diteruskan : '',
          status : 'Proses',
        },
        {
          id: 3,
          tgl: '11-05-2022',
          no_agenda: '002',
          pengirim: 'Kantor Desa Mangga',
          diteruskan : 'RESKRIM',
          status : 'Selesai',
        },
      ],
    }
  },
}
</script>

