<template>
        
          <div class="row">
            <div class="col-12">
              <div class="card mt-2">
                <div class="card-header">
                
                  <div class="row">
                      <div class="col-12">
                        <h3>Disposisi Surat Masuk</h3>
                      </div>
                  </div>
                </div>
                <!-- /.card-header -->
                <div class="card-body">
                  <table id="tabel" class="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>Kepada</th>
                        <th>No. Agenda</th>
                        <th>Pengirim</th>
                        <th>Isi Disposisi</th>
                        <th>Tanggal Diterima</th>
                        <th>Waktu Diterima</th>
                        <th>Status</th>
                        <th>Aksi</th>
                      </tr>
                    </thead>
                      <tbody>
                     <tr v-for="disposition in dispositions" :key="disposition.id">
                        <td>{{ disposition.kepada }}</td>
                        <td>{{ disposition.no_agenda }}</td>
                        <td>{{ disposition.pengirim }}</td>
                        <td>{{ disposition.isi }}</td>
                        <td>{{ disposition.tgl_diterima }}</td>
                        <td>{{ disposition.waktu_diterima }}</td>
                        <td>
                         <template v-if="disposition.status === 'Selesai'">
                           <span class="badge bg-success">{{ disposition.status }}</span>
                          </template>
                          <template v-else>
                           <span class="badge bg-warning">{{ disposition.status }}</span>
                          </template>
                        </td>
                        <td>
                          <a href="{{ route('disposition.show', { id : disposition.id }) }}" class="mr-2">
                            <i class="fas fa-arrow-circle-right text-secondary"></i>
                          </a>
                          <a href="{{ route('disposition.edit', { id : disposition.id }) }}">
                            <i class="fas fa-edit text-warning"></i>
                          </a>
                          <a href="{{ route('disposition.delete', { id : disposition.id }) }}" onclick="konfirmasiHapus()">
                            <i class="fas fa-trash text-danger"></i>
                          </a>
                        </td>
                      </tr>
                    
                    </tbody>
                 </table>
                </div>

              </div>
              <!-- /.card -->
            </div>
            <!-- /.col -->
          </div>
          <!-- /.row -->

</template>

<script>
export default {
    data() {
    return {
      dispositions: [
        {
          id: 1,
          kepada : 'Kapolsek Sidodadi',
          no_agenda: '001',
          pengirim: 'Kantor Desa Telogerejo',
          isi: 'Lanjutkan sesuai pengiriman',
          tgl_diterima: '11-05-2022',
          waktu_diterima: '11-05-2022',
          status : 'Selesai',
        },
        {
          id: 2,
          kepada : 'Kapolsek Telogerejo',
          no_agenda: '002',
          pengirim: 'Kantor Desa Telogerejo',
          isi: 'Lanjutkan sesuai pengiriman',
          tgl_diterima: '12-05-2022',
          waktu_diterima: '11-05-2022',
          status : 'Proses',
        },
        {
          id: 3,
          kepada : 'Kapolsek Sidodadi',
          no_agenda: '003',
          pengirim: 'Kantor Desa Telogerejo',
          isi: 'Lanjutkan sesuai pengiriman',
          tgl_diterima: '13-05-2022',
          waktu_diterima: '11-05-2022',
          status : 'Selesai',
        },
      ],
    }
  },
}
</script>