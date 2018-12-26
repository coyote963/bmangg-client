<template>
<layout-basic>
  <player-profile></player-profile>
</layout-basic>
</template>
<script>
import PlayerProfile from '@/components/PlayerProfile'
import LayoutBasic from '@/components/layouts/AppLayout'
export default {
  components: {
    LayoutBasic: LayoutBasic,
    PlayerProfile: PlayerProfile
  }
}
</script>
