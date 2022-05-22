<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-10">
        <div class="card mt-2">
          <div class="card-header">
            <!-- @if(flashMessage('notification'))
            <div class="alert alert-success">
              {{ flashMessage("notification") }}
            </div>
            @endif -->

            <div class="row">
              <div class="col-10">
                <h3>Daftar Surat Keluar</h3>
              </div>
              <div class="col-2">
                <button
                  type="button"
                  class="btn btn-block btn-primary"
                  data-toggle="modal"
                  data-target="#modal-add-outmails"
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
                  <th>No.</th>
                  <th>Klasifikasi Tujuan</th>
                  <th>Tanggal Surat</th>
                  <th>No. Surat</th>
                  <th>Kepada</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
               <tr v-for="outmail in outmails" :key="outmail.id">
                  <td>{{ outmail.id }}</td>
                  <td>{{ outmail.klasifikasi_tujuan }}</td>
                  <td>{{ outmail.tgl }}</td>
                  <td>{{ outmail.no_surat }}</td>
                  <td>{{ outmail.kepada }}</td>
                  <td>   
                    <template v-if="outmail.status === 'Menunggu'">
                    <span class="badge bg-warning">{{ outmail.status }}</span>
                    </template>
                    <template v-else-if="outmail.status === 'Dikembalikan'">
                    <span class="badge bg-primary">{{ outmail.status }}</span>
                    </template>
                    <template v-else>
                    <span class="badge bg-success">{{ outmail.status }}</span>
                    </template>
                  </td>
                  <td>
                    <a
                      href="{{ route('outmail.show', { id : outmail.id }) }}"
                      class="mr-2"
                    >
                      <i class="fas fa-arrow-circle-right text-secondary"></i>
                    </a>
                    <a href="{{ route('outmail.edit', { id : outmail.id }) }}">
                      <i class="fas fa-edit text-warning"></i> </a
                    ><br />
                    <a
                      href="{{ route('outmail.delete', { id : outmail.id }) }}"
                      class="mr-2"
                      onclick="konfirmasiHapus()"
                    >
                      <i class="fas fa-trash text-danger"></i>
                    </a>
                     <div v-if="outmail.status === 'Selesai'">
                    <a
                      href="{{ route('outmail.createOutmail', { id : outmail.id }) }}"
                    >
                      <i class="fas fa-print text-info"></i>
                    </a>
                    </div>
                    
                  </td>
                </tr>
                
              </tbody>
              <tfoot>
                <tr>
                  <th>No.</th>
                  <th>Klasifikasi Tujuan</th>
                  <th>Tanggal Surat</th>
                  <th>No. Surat</th>
                  <th>Kepada</th>
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
            <h6>Disetujui</h6>
          </div>
        </div>

        <div class="card bg-primary mt-2">
          <div class="card-body">
            <h2>
              <b>{{}}</b>
            </h2>
            <h6>Dikembalikan</h6>
          </div>
        </div>

        <div class="card bg-warning mt-2">
          <div class="card-body">
            <h2>
              <b>{{}}</b>
            </h2>
            <h6>Menunggu</h6>
          </div>
        </div>
      </div>
    </div>
    <!-- /.row -->
  </div>

  <div class="modal fade" id="modal-add-outmails">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Tambah Surat Keluar</h4>
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
          <form
            action="{{  }}"
            method="POST"
            enctype="multipart/form-data"
          >
            <!-- {{ csrfField() }} -->
            <div class="form-group">
              <b class="text-primary">Properti Surat</b>
              <hr />
            </div>
            <div class="form-group">
              <label for="klasifikasiTujuan">Klasifikasi Instansi Tujuan</label>
              <select
                class="form-control"
                id="klasifikasiTujuan"
                name="klasifikasiTujuan"
                onchange="getKlasifikasiTujuan()"
              >
                <option value="POLRES">POLRES</option>
                <option value="Lainnya">Lainnya</option>
              </select>
            </div>

            <div class="row">
              <div class="col-3">
                <div class="form-group">
                  <label for="klasifikasiSurat">Klasifikasi Surat</label>
                  <select
                    class="form-control"
                    id="klasifikasiSurat"
                    name="klasifikasiSurat"
                    onchange=""
                  >
                    <option value="Biasa">Biasa</option>
                    <option value="Rahasia">Rahasia</option>
                  </select>
                </div>
              </div>
              <div class="col-3">
                <div class="form-group">
                  <label for="tglSurat">Tanggal</label>
                  <input
                    type="date"
                    class="form-control"
                    id="tglSurat"
                    name="tglSurat"
                  />
                </div>
              </div>
              <div class="col-3">
                <div class="form-group">
                  <label for="noSurat">Nomor Surat</label>
                  <input
                    type="text"
                    class="form-control"
                    id="noSuratSK"
                    name="noSurat"
                    placeholder="tipe_surat/nomor_urut_surat/bulan/tahun"
                  />
                </div>
              </div>
              <div class="col-3">
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
              </div>
            </div>

            <div class="row">
              <div class="col-3">
                <div class="form-group">
                  <label for="instansiTujuan">Instansi Tujuan</label>
                  <input
                    type="text"
                    class="form-control"
                    id="instansiTujuan"
                    name="instansiTujuan"
                    placeholder="Masukkan Instansi Tujuan"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label for="perihal">Perihal Surat</label>
                  <input
                    type="text"
                    class="form-control"
                    id="perihal"
                    name="perihal"
                    placeholder="Masukkan Perihal Surat"
                  />
                </div>
              </div>
              <div class="col-3">
                <div class="form-group">
                  <label for="status">Status</label>
                  <select class="form-control" id="status" name="status">
                    <option value="Menunggu">Menunggu</option>
                    <option value="Dikembalikan">Dikembalikan</option>
                    <option value="Selesai">Selesai</option>
                  </select>
                </div>
              </div>
            </div>
            <hr />
            <div class="form-group">
              <label for="isiSurat" class="text-primary">Isi Surat</label>
              <textarea
                id="isiSurat"
                name="isiSurat"
                placeholder="Masukkan Isi Surat di sini"
              ></textarea>
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
</template>

<script>
export default {
    data() {
    return {
      outmails: [
        {
          id: 1,
          klasifikasi_tujuan : 'Kapolsek Sidodadi',
          no_surat: '001',
          kepada: 'Kantor Desa Telogerejo',
          tgl: '11-05-2022',
          status : 'Menunggu',
        },
        {
          id: 2,
          klasifikasi_tujuan : 'Kapolsek Sidodadi',
          no_surat: '002',
          kepada: 'Kantor Desa Telogerejo',
          tgl: '11-05-2022',
          status : 'Selesai',
        },
        {
          id: 3,
          klasifikasi_tujuan : 'Kapolsek Sidodadi',
          no_surat: '003',
          kepada: 'Kantor Desa Telogerejo',
          tgl: '11-05-2022',
          status : 'Dikembalikan',
        },
      ],
    }
  },
}
</script>