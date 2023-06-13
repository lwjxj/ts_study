<script lang="ts">
enum A10 {
    todo = 0,
    done
}

let status1 = A10.todo

enum Permission {
    None = 0, // 0000
    Read = 1 << 0, // 0001
    Write = 1 << 1, // 0010
    Delete = 1 << 2, // 0100
    Manage = Read | Write | Delete // 0111
}

const user1: { permission: Permission} = { permission: 0b0001 }
if((user1.permission & Permission.Write) === Permission.Write) {
    console.log('write')
}
</script>