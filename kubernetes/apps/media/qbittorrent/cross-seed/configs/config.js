module.exports = {
  delay: 30,

  torznab: [
    "http://prowlarr.media.svc.cluster.local:9696/11/api?apikey={{ .PROWLARR_APIKEY }}", // fl
    "http://prowlarr.media.svc.cluster.local:9696/17/api?apikey={{ .PROWLARR_APIKEY }}", // ptp
    "http://prowlarr.media.svc.cluster.local:9696/16/api?apikey={{ .PROWLARR_APIKEY }}", // blutopia
    "http://prowlarr.media.svc.cluster.local:9696/12/api?apikey={{ .PROWLARR_APIKEY }}", // hdt
    "http://prowlarr.media.svc.cluster.local:9696/15/api?apikey={{ .PROWLARR_APIKEY }}", // scenetime
    "http://prowlarr.media.svc.cluster.local:9696/14/api?apikey={{ .PROWLARR_APIKEY }}", // tl
    "http://prowlarr.media.svc.cluster.local:9696/21/api?apikey={{ .PROWLARR_APIKEY }}", // hdbits
    "http://prowlarr.media.svc.cluster.local:9696/3/api?apikey={{ .PROWLARR_APIKEY }}", // ipt
  ],

  action: "inject",
  matchMode: "safe",
  skipRecheck: true,
  includeEpisodes: true,
  includeNonVideos: true,
  duplicateCategories: true,
  outputDir: "/cross-seeds",
  torrentDir: "/config/qBittorrent/BT_backup",
  qbittorrentUrl: "http://qbittorrent.media.svc.cluster.local:8080",
  rssCadence: "15 minutes", // autobrr doesnt get every announcement
};
