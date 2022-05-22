<template>
           <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <div class="card mt-2">
                <div class="card-header">
                  <h3>Laporan Surat Masuk</h3>
                </div>
                <!-- /.card-header -->
                <div class="card-body">
                  <table cellspacing="5" cellpadding="5">
                    <tbody>
                      <tr>
                        <td><b>Mulai tanggal</b></td>
                        <td>:</td>
                        <td><input type="text" id="min" name="min"></td>
                        <td><b>hingga tanggal</b></td>
                        <td>:</td>
                        <td><input type="text" id="max" name="max"></td>
                      </tr>
                      <tr>
                      </tr>
                    </tbody>
                  </table>

                  <table id="laporan" class="table table-bordered table-striped" style="width:100%">
                    <thead>
                      <tr>
                        <th width="10%">Tanggal</th>
                        <th width="10%">Nomor Agenda</th>
                        <th width="15%">Nomor Surat Masuk</th>
                        <th width="10%">Tanggal Surat</th>
                        <th width="5%">Lampiran</th>
                        <th width="5%">Terima Dari</th>
                        <th width="20%">Perihal</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="inmail in inmails" :key="inmail.id">
                        <td>{{ inmail.tgl }}</td>
                        <td>{{ inmail.no_agenda }}</td>
                        <td>{{ inmail.no_surat }}</td>
                        <td>{{ inmail.tgl_surat }}</td>
                        <td>
                           <template v-if="inmail.lampiran == '-'">
                           -
                           </template>
                          <template v-else-if="inmail.lampiran == '-'">
                          -
                          </template>
                          <template v-else>
                           1 Lembar
                           </template>
                        </td>
                        <td>{{ inmail.pengirim }}</td>
                        <td>{{ inmail.perihal }}</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th>Tanggal</th>
                        <th>Nomor Agenda</th>
                        <th>Nomor Surat Masuk</th>
                        <th>Tanggal Surat</th>
                        <th>Lampiran</th>
                        <th>Terima Dari</th>
                        <th>Perihal</th>
                      </tr>
                    </tfoot>
                  </table>
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

<script>
export default {
    data() {
    return {
      inmails: [
        {
          id: 1,
          tgl: '11-05-2022',
          tgl_surat: '11-05-2022',
          no_agenda: '001',
          no_surat: 'S/001',
          pengirim: 'Kantor Desa Telogerejo',
          diteruskan : 'SIUM',
          lampiran : '',
          perihal : 'Undangan',
          status : 'Selesai',
        },
        {
          id: 2,
          tgl: '11-05-2022',
          tgl_surat: '11-05-2022',
          no_agenda: '002',
          no_surat: 'S/002',
          pengirim: 'Kantor Desa Aren',
          diteruskan : '',
          lampiran : 'fgd',
          perihal : 'Undangan',
          status : 'Proses',
        },
        {
          id: 3,
          tgl: '11-05-2022',
          tgl_surat: '11-05-2022',
          no_agenda: '002',
          no_surat: 'S/003',
          pengirim: 'Kantor Desa Mangga',
          diteruskan : 'RESKRIM',
          lampiran : '-',
          perihal : 'Undangan',
          status : 'Selesai',
        },
      ],
    }
  },
}
</script>