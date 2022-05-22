<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card mt-2">
          <div class="card-header">
            <!-- @if(flashMessage('notification'))
            <div class="alert alert-success">
              {{ flashMessage("notification") }}
            </div>
            @endif -->

            <div class="row">
              <div class="col-10">
                <h3>Data Pengguna</h3>
              </div>
              <div class="col-2">
                <button
                  type="button"
                  class="btn btn-block btn-primary"
                  data-toggle="modal"
                  data-target="#modal-add-user"
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
                  <th width="5%">ID</th>
                  <th>Role</th>
                  <th>Nama</th>
                  <th>NRP</th>
                  <th>Satuan</th>
                  <th>Pangkat</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
                <tbody id="tasks">
                      
                      <tr v-for="user in users" :key="user.id">
                        <td>{{ user.id }}</td>
                        <td>{{ user.role }}</td>
                        <td>{{ user.nama }}</td>
                        <td>{{ user.nrp }}</td>
                        <td>{{ user.satuan }}</td>
                        <td>{{ user.pangkat }}</td>
                        <td>                     
                           <template v-if="user.status == 'Aktif'">
                            <span class="badge bg-success">{{ user.status }}</span>
                           </template>

                          <template v-else>
                            <span class="badge bg-danger">{{ user.status }}</span>
                          </template>
                        </td>
                        <td>
                          <a href="{{ route('user.show', { id : user.id }) }}" class="mr-2">
                            <i class="fas fa-arrow-circle-right text-secondary"></i>
                          </a>
                          <a href="{{ route('user.edit', { id : user.id }) }}" class="mr-2">
                            <i class="fas fa-edit text-warning"></i>
                          </a>
                          <a href="{{ route('user.delete', { id : user.id }) }}" onclick="konfirmasiHapus()">
                            <i class="fas fa-trash text-danger"></i>
                          </a>
                        </td>
                      </tr>
                    
                    </tbody>
              <tfoot>
                <tr>
                  <th>ID</th>
                  <th>Role</th>
                  <th>Nama</th>
                  <th>NRP</th>
                  <th>Satuan</th>
                  <th>Pangkat</th>
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
    </div>
    <!-- /.row -->
  </div>
          <div class="modal fade" id="modal-add-user">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">Tambah Pengguna</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form action="{{ route('user.store') }}" method="POST">
                  <!-- {{ csrfField() }} -->
                  <div class="form-group">
                    <label for="jabatan">Role</label>
                    <select class="form-control" name="role">
                      <option value="Admin">Admin</option>
                      <option value="KASIUM">KASIUM</option>
                      <option value="KAPOLSEK">KAPOLSEK</option>
                      <option value="Satuan Kerja">Satuan Kerja</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="nama">Nama</label>
                    <input type="text" class="form-control" id="nama" name="nama" placeholder="Nama lengkap Anda">
                  </div>
                  <div class="form-group">
                    <label for="nrp">NRP (Nomor Register Pokok)</label>
                    <input type="text" class="form-control" id="nrp" name="nrp" placeholder="NRP Anda">
                  </div>
                  <div class="form-group">
                    <label for="jabatan">Satuan</label>
                    <select class="form-control" name="satuan">
                      <option value="SIUM">SIUM</option>
                      <option value="RESKRIM">RESKRIM</option>
                      <option value="BABHINKAMTIBMAS">BABHINKAMTIBMAS</option>
                      <option value="SPKT">SPKT</option>
                      <option value="SABHARA">SABHARA</option>
                      <option value="INTELKAM">INTELKAM</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="jabatan">Pangkat</label>
                    <select class="form-control" name="pangkat">
                      <option value="KOMPOL">KOMPOL</option>
                      <option value="AKP">AKP</option>
                      <option value="IPTU">IPTU</option>
                      <option value="IPDA">IPDA</option>
                      <option value="AIPTU">AIPTU</option>
                      <option value="AIPDA">AIPDA</option>
                      <option value="BRIPKA">BRIPKA</option>
                      <option value="BRIGPOL">BRIGPOL</option>
                      <option value="BRIGTU">BRIGTU</option>
                      <option value="BRIGDA">BRIGDA</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="jenisKelamin">Jenis Kelamin</label>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="jenisKelamin" value="Laki-laki" checked>
                      <label class="form-check-label" for="Laki-laki">Laki-laki</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="jenisKelamin" value="Perempuan">
                      <label class="form-check-label" for="Perempuan">Perempuan</label>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="alamat">Alamat</label>
                    <textarea class="form-control" rows="3" name="alamat" placeholder="Alamat Anda"></textarea>
                  </div>
                  <div class="form-group">
                    <label for="jabatan">Status</label>
                    <select class="form-control" name="status">
                      <option value="Aktif">Aktif</option>
                      <option value="Tidak aktif">Tidak aktif</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" class="form-control" id="username" name="username" placeholder="Username Anda">
                  </div>
                  <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" name="password" placeholder="Password Anda">
                  </div>
                  <div class="modal-footer justify-content-between">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Tutup</button>
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
      users: [
        {
          id: 1,
          role : 'Admin',
          nama : 'Administrator',
          nrp : '1102',
          satuan: 'SIUM',
          pangkat : 'BRIGTU',
          status : 'Selesai',
        },
        {
          id: 2,
          role : 'Kapolsek',
          nama : 'M. Lazib SH',
          nrp : '1556',
          satuan: 'SIUM',
          pangkat : 'AIPTU',
          status : 'Selesai',
        },
        {
          id: 3,
          role : 'Satuan Kerja',
          nama : 'Teguh',
          nrp : '2243',
          satuan: 'BRIGDA',
          pangkat : '11-05-2022',
          status : 'Selesai',
        },
      ],
    }
  },
}
</script>