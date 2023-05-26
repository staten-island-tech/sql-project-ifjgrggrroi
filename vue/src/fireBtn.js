import { reactive } from 'vue'
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'

;<script setup>
  const {(data, error)} = await supabase.from('alldata').delete().eq('name', 'annie sr')
</script>
