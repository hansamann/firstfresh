import { Head } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <>
      <Head>
        <title>Test Player</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
      <script src="https://www.kaltura.com/p/1921661/sp/192166100/embedIframeJs/uiconf_id/35919811/partner_id/1921661?autoembed=true&entry_id=1_0urabyzp&wid=_1921661&playerId=kaltura_player_2058970376&width=400&height=285&flashvars[sideBarContainer.plugin]=true&flashvars[sideBarContainer.position]=left&flashvars[sideBarContainer.clickToClose]=true&flashvars[chapters.plugin]=true&flashvars[chapters.layout]=vertical&flashvars[chapters.thumbnailRotator]=false&flashvars[streamSelector.plugin]=true&flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&flashvars[dualScreen.plugin]=true&flashvars[hotspots.plugin]=true"></script>
      </div>
    </>
  );
}
