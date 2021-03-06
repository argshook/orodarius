(function() {
  'use strict';

  angular.module('orodariusMocks', ['ngMockE2E']).run(function($httpBackend) {
    var REDDIT = {
      kind: 'Listing',
      data: {
        modhash: 'tneogt0h1v0a71c81c57d908409cf202591175254c133d2ef9',
        children: [
          {
            kind: 't3',
            data: {
              domain: 'self.videos',
              banned_by: null,
              media_embed: {},
              subreddit: 'videos',
              selftext_html:
                '&lt;!-- SC_OFF --&gt;&lt;div class="md"&gt;&lt;p&gt;Hello, everyone,&lt;/p&gt;\n\n&lt;p&gt;We have a few updates to bring you about the state of &lt;a href="/r/videos"&gt;/r/videos&lt;/a&gt;, and some new features which we hope you&amp;#39;ll like:&lt;/p&gt;\n\n&lt;p&gt;&lt;strong&gt;1. (Re-)introducing &lt;a href="/r/videos_discussion"&gt;/r/videos_discussion&lt;/a&gt;&lt;/strong&gt;&lt;/p&gt;\n\n&lt;p&gt;As not that many of you will be aware, we have &lt;strong&gt;a meta sub for discussion about &lt;a href="/r/videos"&gt;/r/videos&lt;/a&gt;&lt;/strong&gt;, its rules, its practices, and generally for us to communicate with you &lt;em&gt;en masse&lt;/em&gt;.&lt;/p&gt;\n\n&lt;p&gt;It&amp;#39;s been around for a little while, but we&amp;#39;ve re-vamped it, tightened up on the rules, and would like to see as many of you there as possible. We get a lot of messages from you guys to find out about why certain rules exist, if we have considered adding/removing [something], and other such useful debate. Now there&amp;#39;s a place to have those discussions openly, with contributions from as many people as possible: &lt;strong&gt;&lt;a href="/r/videos_discussion"&gt;/r/videos_discussion&lt;/a&gt;&lt;/strong&gt;&lt;/p&gt;\n\n&lt;hr/&gt;\n\n&lt;p&gt;&lt;strong&gt;2. The IRC&lt;/strong&gt;&lt;/p&gt;\n\n&lt;p&gt;We haven&amp;#39;t publicised this much, but &lt;strong&gt;we have our very own IRC channel: #videos on Snoonet&lt;/strong&gt;. You can &lt;strong&gt;join &lt;a href="https://kiwiirc.com/client/irc.snoonet.org/#videos"&gt;using the web client&lt;/a&gt;&lt;/strong&gt;, or you can use whichever desktop client you prefer &lt;a href="https://www.snoonet.org/help#using-webchat"&gt;following this guide&lt;/a&gt; if required.&lt;/p&gt;\n\n&lt;p&gt;We&amp;#39;d love to see some of you on there, and get some #videos regulars. If you aren&amp;#39;t enthralled by the level of chat alone, then keep in mind that it&amp;#39;s a very good way to contact us directly for longer/faster conversations than modmail would allow for. There will (almost) always be a mod online, so feel free to get in touch that way if you&amp;#39;d rather.&lt;/p&gt;\n\n&lt;hr/&gt;\n\n&lt;p&gt;&lt;strong&gt;3. Vines&lt;/strong&gt;&lt;/p&gt;\n\n&lt;p&gt;We&amp;#39;ve had a whole lot of messages arguing for and against the banning of Vines following &lt;a href="https://www.reddit.com/r/videos/comments/2zzod4/when_you_dunked_so_hard_it_went_in_twice/"&gt;this submission&lt;/a&gt; which hit #1 on the frontpage.&lt;/p&gt;\n\n&lt;p&gt;Having discussed it with many of you who messaged in, and amongst ourselves, &lt;strong&gt;we will be trialling a few new features&lt;/strong&gt;:&lt;/p&gt;\n\n&lt;p&gt;&lt;strong&gt;- [Vine] tags in title.&lt;/strong&gt; These are not (yet) enforced, but are strongly encouraged. It helps mobile users out a lot.&lt;/p&gt;\n\n&lt;p&gt;&lt;strong&gt;- Toggle vines on/off.&lt;/strong&gt; If you hate them lots, get rid of them by clicking the link in the sidebar to toggle them off altogether&lt;/p&gt;\n\n&lt;p&gt;Vines are fairly unique in that the length restriction lends itself to certain types of content which other platforms do not encourage in the same way, and so it would be a shame to remove them entirely. This way, if you don&amp;#39;t want to watch them, they should be easier to avoid. If the tag proves popular, then we may move to a more enforced method in future in which only Vines with [Vine] at the beginning of the title are permitted.&lt;/p&gt;\n\n&lt;p&gt;&lt;em&gt;Please note that this is going to be in place for trial period of about a month. We&amp;#39;d love to hear your feedback over on &lt;a href="https://www.reddit.com/r/videos_discussion/comments/306kqn/mod_post_vine_policy_changes_discussion/"&gt;this thread in /r/videos_discussion&lt;/a&gt;&lt;/em&gt;&lt;/p&gt;\n\n&lt;hr/&gt;\n\n&lt;p&gt;&lt;strong&gt;4. New Moderators&lt;/strong&gt;&lt;/p&gt;\n\n&lt;p&gt;As a default subreddit, we strive to set up rules that bring you the best content possible without overly limiting what you can and cannot submit. A lot of these rules cannot be automated by a bot, and therefore must have humans to confirm if a post is or is not breaking them.&lt;/p&gt;\n\n&lt;p&gt;As a result, we have added six new moderators in order to help keep up with modmail, comment moderation, and general moderation exercises. After a trial period of a month, we are proud to announce these new moderators as they have been knocking it out of the park in terms of activity, professionalism, and attitude!&lt;/p&gt;\n\n&lt;p&gt;Please give a big welcome to the newest members of the &lt;a href="/r/videos"&gt;/r/videos&lt;/a&gt; team:&lt;/p&gt;\n\n&lt;p&gt;&lt;a href="/u/Fritzly"&gt;/u/Fritzly&lt;/a&gt;,&lt;br/&gt;\n&lt;a href="/u/bacondev"&gt;/u/bacondev&lt;/a&gt;,&lt;br/&gt;\n&lt;a href="/u/Meepster23"&gt;/u/Meepster23&lt;/a&gt;,&lt;br/&gt;\n&lt;a href="/u/TheMentalist10"&gt;/u/TheMentalist10&lt;/a&gt;,&lt;br/&gt;\n&lt;a href="/u/MuggyFuzzball"&gt;/u/MuggyFuzzball&lt;/a&gt;,&lt;br/&gt;\nand &lt;a href="/u/S1lv3rSmith"&gt;/u/S1lv3rSmith&lt;/a&gt;&lt;/p&gt;\n\n&lt;hr/&gt;\n\n&lt;p&gt;And that&amp;#39;s all, folks. See you next time.&lt;/p&gt;\n\n&lt;ul&gt;\n&lt;li&gt;&lt;em&gt;The &lt;a href="/r/videos"&gt;/r/videos&lt;/a&gt; Moderators&lt;/em&gt;&lt;/li&gt;\n&lt;/ul&gt;\n&lt;/div&gt;&lt;!-- SC_ON --&gt;',
              selftext:
                "Hello, everyone,\n\nWe have a few updates to bring you about the state of /r/videos, and some new features which we hope you'll like:\n\n**1. (Re-)introducing /r/videos_discussion**\n\nAs not that many of you will be aware, we have **a meta sub for discussion about /r/videos**, its rules, its practices, and generally for us to communicate with you *en masse*.\n\nIt's been around for a little while, but we've re-vamped it, tightened up on the rules, and would like to see as many of you there as possible. We get a lot of messages from you guys to find out about why certain rules exist, if we have considered adding/removing [something], and other such useful debate. Now there's a place to have those discussions openly, with contributions from as many people as possible: **/r/videos_discussion**\n*****\n**2. The IRC**\n\nWe haven't publicised this much, but **we have our very own IRC channel: #videos on Snoonet**. You can **join [using the web client](https://kiwiirc.com/client/irc.snoonet.org/#videos)**, or you can use whichever desktop client you prefer [following this guide](https://www.snoonet.org/help#using-webchat) if required.\n\nWe'd love to see some of you on there, and get some #videos regulars. If you aren't enthralled by the level of chat alone, then keep in mind that it's a very good way to contact us directly for longer/faster conversations than modmail would allow for. There will (almost) always be a mod online, so feel free to get in touch that way if you'd rather.\n*****\n**3. Vines**\n\nWe've had a whole lot of messages arguing for and against the banning of Vines following [this submission](https://www.reddit.com/r/videos/comments/2zzod4/when_you_dunked_so_hard_it_went_in_twice/) which hit #1 on the frontpage.\n\nHaving discussed it with many of you who messaged in, and amongst ourselves, **we will be trialling a few new features**:\n\n**- [Vine] tags in title.** These are not (yet) enforced, but are strongly encouraged. It helps mobile users out a lot.\n\n**- Toggle vines on/off.** If you hate them lots, get rid of them by clicking the link in the sidebar to toggle them off altogether\n\nVines are fairly unique in that the length restriction lends itself to certain types of content which other platforms do not encourage in the same way, and so it would be a shame to remove them entirely. This way, if you don't want to watch them, they should be easier to avoid. If the tag proves popular, then we may move to a more enforced method in future in which only Vines with [Vine] at the beginning of the title are permitted.\n\n*Please note that this is going to be in place for trial period of about a month. We'd love to hear your feedback over on [this thread in /r/videos_discussion](https://www.reddit.com/r/videos_discussion/comments/306kqn/mod_post_vine_policy_changes_discussion/)*\n*****\n**4. New Moderators**\n\nAs a default subreddit, we strive to set up rules that bring you the best content possible without overly limiting what you can and cannot submit. A lot of these rules cannot be automated by a bot, and therefore must have humans to confirm if a post is or is not breaking them.\n\nAs a result, we have added six new moderators in order to help keep up with modmail, comment moderation, and general moderation exercises. After a trial period of a month, we are proud to announce these new moderators as they have been knocking it out of the park in terms of activity, professionalism, and attitude!\n\nPlease give a big welcome to the newest members of the /r/videos team:\n\n/u/Fritzly,  \n/u/bacondev,  \n/u/Meepster23,  \n/u/TheMentalist10,  \n/u/MuggyFuzzball,  \nand /u/S1lv3rSmith\n\n*****\n\nAnd that's all, folks. See you next time.\n\n- *The /r/videos Moderators*\n",
              likes: null,
              user_reports: [],
              secure_media: null,
              link_flair_text: null,
              id: '306s8r',
              gilded: 0,
              archived: false,
              clicked: false,
              report_reasons: null,
              author: 'videos_mod',
              num_comments: 258,
              score: 293,
              approved_by: null,
              over_18: false,
              hidden: false,
              thumbnail: 'self',
              subreddit_id: 't5_2qh1e',
              edited: false,
              link_flair_css_class: null,
              author_flair_css_class: null,
              downs: 0,
              secure_media_embed: {},
              saved: false,
              stickied: true,
              is_self: true,
              permalink:
                '/r/videos/comments/306s8r/discussions_the_irc_vines_and_new_mods/',
              name: 't3_306s8r',
              created: 1427241477.0,
              url:
                'https://www.reddit.com/r/videos/comments/306s8r/discussions_the_irc_vines_and_new_mods/',
              author_flair_text: null,
              title: 'Discussions, The IRC, Vines, and New Mods',
              created_utc: 1427237877.0,
              distinguished: 'moderator',
              media: null,
              mod_reports: [],
              visited: false,
              num_reports: null,
              ups: 293
            }
          },
          {
            kind: 't3',
            data: {
              domain: 'youtube.com',
              banned_by: null,
              media_embed: {
                content:
                  '&lt;iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2F02pWbr9bgbA%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D02pWbr9bgbA&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2F02pWbr9bgbA%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                width: 600,
                scrolling: false,
                height: 338
              },
              subreddit: 'videos',
              selftext_html: null,
              selftext: '',
              likes: null,
              user_reports: [],
              secure_media: {
                oembed: {
                  provider_url: 'https://www.youtube.com/',
                  description:
                    'Plasser &amp; Theurer SWIETELSKY Baugesellschaft m.b.H.',
                  title: 'RU 800 S',
                  url: 'https://www.youtube.com/watch?v=02pWbr9bgbA',
                  type: 'video',
                  author_name: 'TrackMachines',
                  height: 338,
                  width: 600,
                  html:
                    '&lt;iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F02pWbr9bgbA%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D02pWbr9bgbA&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2F02pWbr9bgbA%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                  thumbnail_width: 480,
                  version: '1.0',
                  provider_name: 'YouTube',
                  thumbnail_url:
                    'https://i.embed.ly/1/image?url=http%3A%2F%2Fi.ytimg.com%2Fvi%2F02pWbr9bgbA%2Fhqdefault.jpg&amp;key=b1e305db91cf4aa5a86b732cc9fffceb',
                  thumbnail_height: 360,
                  author_url:
                    'https://www.youtube.com/channel/UCgRU4p9o32jgY4vQKRIrZjA'
                },
                type: 'youtube.com'
              },
              link_flair_text: null,
              id: '31myfd',
              gilded: 0,
              archived: false,
              clicked: false,
              report_reasons: null,
              author: 'MittenSplits',
              num_comments: 1142,
              score: 5083,
              approved_by: null,
              over_18: false,
              hidden: false,
              thumbnail:
                'https://b.thumbs.redditmedia.com/LyDjqRWMBlXO9mvdZDlSOjpOp6qlpQ9SMHe7VXHVjhE.jpg',
              subreddit_id: 't5_2qh1e',
              edited: false,
              link_flair_css_class: null,
              author_flair_css_class: null,
              downs: 0,
              secure_media_embed: {
                content:
                  '&lt;iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F02pWbr9bgbA%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D02pWbr9bgbA&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2F02pWbr9bgbA%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                width: 600,
                scrolling: false,
                height: 338
              },
              saved: false,
              stickied: false,
              is_self: false,
              permalink:
                '/r/videos/comments/31myfd/railroad_assembly_line_that_is_a_seriously/',
              name: 't3_31myfd',
              created: 1428363671.0,
              url: 'https://www.youtube.com/watch?v=02pWbr9bgbA',
              author_flair_text: null,
              title:
                'Railroad assembly line? That is a seriously incredible machine, I could watch that all day..',
              created_utc: 1428334871.0,
              distinguished: null,
              media: {
                oembed: {
                  provider_url: 'https://www.youtube.com/',
                  description:
                    'Plasser &amp; Theurer SWIETELSKY Baugesellschaft m.b.H.',
                  title: 'RU 800 S',
                  url: 'https://www.youtube.com/watch?v=02pWbr9bgbA',
                  type: 'video',
                  author_name: 'TrackMachines',
                  height: 338,
                  width: 600,
                  html:
                    '&lt;iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2F02pWbr9bgbA%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D02pWbr9bgbA&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2F02pWbr9bgbA%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                  thumbnail_width: 480,
                  version: '1.0',
                  provider_name: 'YouTube',
                  thumbnail_url:
                    'https://i.ytimg.com/vi/02pWbr9bgbA/hqdefault.jpg',
                  thumbnail_height: 360,
                  author_url:
                    'https://www.youtube.com/channel/UCgRU4p9o32jgY4vQKRIrZjA'
                },
                type: 'youtube.com'
              },
              mod_reports: [],
              visited: false,
              num_reports: null,
              ups: 5083
            }
          },
          {
            kind: 't3',
            data: {
              domain: 'youtube.com',
              banned_by: null,
              media_embed: {
                content:
                  '&lt;iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2F8dl3rYC8ls0%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D8dl3rYC8ls0&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2F8dl3rYC8ls0%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                width: 600,
                scrolling: false,
                height: 338
              },
              subreddit: 'videos',
              selftext_html: null,
              selftext: '',
              likes: null,
              user_reports: [],
              secure_media: {
                type: 'youtube.com',
                oembed: {
                  provider_url: 'https://www.youtube.com/',
                  description:
                    "Cody's really glad Easter's over. Special Thanks: - Lauren Davis - James Rayburn",
                  title: 'The Bad Egg',
                  url: 'https://www.youtube.com/watch?v=8dl3rYC8ls0',
                  author_name: 'Grant &amp; Cody',
                  height: 338,
                  width: 600,
                  html:
                    '&lt;iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F8dl3rYC8ls0%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D8dl3rYC8ls0&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2F8dl3rYC8ls0%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                  thumbnail_width: 480,
                  version: '1.0',
                  provider_name: 'YouTube',
                  thumbnail_url:
                    'https://i.embed.ly/1/image?url=http%3A%2F%2Fi.ytimg.com%2Fvi%2F8dl3rYC8ls0%2Fhqdefault.jpg&amp;key=b1e305db91cf4aa5a86b732cc9fffceb',
                  type: 'video',
                  thumbnail_height: 360,
                  author_url:
                    'https://www.youtube.com/channel/UCmpQekXIv8okzdzSOECpNjA'
                }
              },
              link_flair_text: null,
              id: '31n0qs',
              gilded: 0,
              archived: false,
              clicked: false,
              report_reasons: null,
              author: 'behindthebushes0',
              num_comments: 90,
              score: 979,
              approved_by: null,
              over_18: false,
              hidden: false,
              thumbnail:
                'https://b.thumbs.redditmedia.com/NqdvNIl2KcFXZ4xtEPoHAoIkVBsEHEf0ZxnohWrn_fI.jpg',
              subreddit_id: 't5_2qh1e',
              edited: false,
              link_flair_css_class: null,
              author_flair_css_class: null,
              downs: 0,
              secure_media_embed: {
                content:
                  '&lt;iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F8dl3rYC8ls0%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D8dl3rYC8ls0&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2F8dl3rYC8ls0%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                width: 600,
                scrolling: false,
                height: 338
              },
              saved: false,
              stickied: false,
              is_self: false,
              permalink:
                '/r/videos/comments/31n0qs/you_guys_have_a_good_easter_because_i_sure_didnt/',
              name: 't3_31n0qs',
              created: 1428339567.0,
              url: 'https://www.youtube.com/watch?v=8dl3rYC8ls0',
              author_flair_text: null,
              title: "You guys have a good Easter? Because I sure didn't. [OC]",
              created_utc: 1428335967.0,
              distinguished: null,
              media: {
                type: 'youtube.com',
                oembed: {
                  provider_url: 'https://www.youtube.com/',
                  description:
                    "Cody's really glad Easter's over. Special Thanks: - Lauren Davis - James Rayburn",
                  title: 'The Bad Egg',
                  url: 'https://www.youtube.com/watch?v=8dl3rYC8ls0',
                  author_name: 'Grant &amp; Cody',
                  height: 338,
                  width: 600,
                  html:
                    '&lt;iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2F8dl3rYC8ls0%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D8dl3rYC8ls0&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2F8dl3rYC8ls0%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                  thumbnail_width: 480,
                  version: '1.0',
                  provider_name: 'YouTube',
                  thumbnail_url:
                    'https://i.ytimg.com/vi/8dl3rYC8ls0/hqdefault.jpg',
                  type: 'video',
                  thumbnail_height: 360,
                  author_url:
                    'https://www.youtube.com/channel/UCmpQekXIv8okzdzSOECpNjA'
                }
              },
              mod_reports: [],
              visited: false,
              num_reports: null,
              ups: 979
            }
          },
          {
            kind: 't3',
            data: {
              domain: 'player.vimeo.com',
              banned_by: null,
              media_embed: {
                content:
                  '&lt;iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F28517394&amp;url=http%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F28517394&amp;image=http%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F190307624_295x166.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=vimeo" width="400" height="296" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                width: 400,
                scrolling: false,
                height: 296
              },
              subreddit: 'videos',
              selftext_html: null,
              selftext: '',
              likes: null,
              user_reports: [],
              secure_media: {
                type: 'player.vimeo.com',
                oembed: {
                  provider_url: 'https://vimeo.com/',
                  description:
                    'The Famous "N" Word Speech given by AFA Champion Anita Hill.',
                  title: 'AFA Champion ADS by Marlita Hill',
                  thumbnail_width: 295,
                  height: 296,
                  width: 400,
                  html:
                    '&lt;iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F28517394&amp;url=http%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F28517394&amp;image=http%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F190307624_295x166.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=vimeo" width="400" height="296" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                  author_name: 'matt grisat',
                  version: '1.0',
                  provider_name: 'Vimeo',
                  thumbnail_url:
                    'https://i.embed.ly/1/image?url=http%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F190307624_295x166.jpg&amp;key=b1e305db91cf4aa5a86b732cc9fffceb',
                  type: 'video',
                  thumbnail_height: 166,
                  author_url: 'https://vimeo.com/user6943476'
                }
              },
              link_flair_text: null,
              id: '31mmu9',
              gilded: 0,
              archived: false,
              clicked: false,
              report_reasons: null,
              author: 'twoleafblowers',
              num_comments: 158,
              score: 757,
              approved_by: null,
              over_18: false,
              hidden: false,
              thumbnail:
                'https://b.thumbs.redditmedia.com/zViRyHX_qzciubM3PVp8I9GZN3MOYkqqxk_AehYGASo.jpg',
              subreddit_id: 't5_2qh1e',
              edited: false,
              link_flair_css_class: null,
              author_flair_css_class: null,
              downs: 0,
              secure_media_embed: {
                content:
                  '&lt;iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F28517394&amp;url=http%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F28517394&amp;image=http%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F190307624_295x166.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=vimeo" width="400" height="296" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                width: 400,
                scrolling: false,
                height: 296
              },
              saved: false,
              stickied: false,
              is_self: false,
              permalink:
                '/r/videos/comments/31mmu9/on_using_the_nword_or_nigger_hilarious_speech/',
              name: 't3_31mmu9',
              created: 1428357896.0,
              url: 'https://player.vimeo.com/video/28517394',
              author_flair_text: null,
              title: 'On using the n-word, or "nigger:" Hilarious speech',
              created_utc: 1428329096.0,
              distinguished: null,
              media: {
                type: 'player.vimeo.com',
                oembed: {
                  provider_url: 'https://vimeo.com/',
                  description:
                    'The Famous "N" Word Speech given by AFA Champion Anita Hill.',
                  title: 'AFA Champion ADS by Marlita Hill',
                  thumbnail_width: 295,
                  height: 296,
                  width: 400,
                  html:
                    '&lt;iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F28517394&amp;url=http%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F28517394&amp;image=http%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F190307624_295x166.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=vimeo" width="400" height="296" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                  author_name: 'matt grisat',
                  version: '1.0',
                  provider_name: 'Vimeo',
                  thumbnail_url:
                    'https://i.vimeocdn.com/video/190307624_295x166.jpg',
                  type: 'video',
                  thumbnail_height: 166,
                  author_url: 'https://vimeo.com/user6943476'
                }
              },
              mod_reports: [],
              visited: false,
              num_reports: null,
              ups: 757
            }
          },
          {
            kind: 't3',
            data: {
              domain: 'youtube.com',
              banned_by: null,
              media_embed: {
                content:
                  '&lt;iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2F1f1wpHIpyKQ%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1f1wpHIpyKQ&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2F1f1wpHIpyKQ%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="450" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                width: 600,
                scrolling: false,
                height: 450
              },
              subreddit: 'videos',
              selftext_html: null,
              selftext: '',
              likes: null,
              user_reports: [],
              secure_media: {
                oembed: {
                  provider_url: 'https://www.youtube.com/',
                  description: 'Uploaded by ooskah on 2015-04-06.',
                  title:
                    'Idiots body slamming hoods of random parked cars, receive instant karma at end',
                  url: 'https://www.youtube.com/watch?v=1f1wpHIpyKQ',
                  type: 'video',
                  author_name: 'ooskah',
                  height: 450,
                  width: 600,
                  html:
                    '&lt;iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F1f1wpHIpyKQ%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1f1wpHIpyKQ&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2F1f1wpHIpyKQ%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="450" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                  thumbnail_width: 480,
                  version: '1.0',
                  provider_name: 'YouTube',
                  thumbnail_url:
                    'https://i.embed.ly/1/image?url=http%3A%2F%2Fi.ytimg.com%2Fvi%2F1f1wpHIpyKQ%2Fhqdefault.jpg&amp;key=b1e305db91cf4aa5a86b732cc9fffceb',
                  thumbnail_height: 360,
                  author_url: 'https://www.youtube.com/user/ooskah'
                },
                type: 'youtube.com'
              },
              link_flair_text: null,
              id: '31lenf',
              gilded: 0,
              archived: false,
              clicked: false,
              report_reasons: null,
              author: 'oreoscar',
              num_comments: 6708,
              score: 4558,
              approved_by: null,
              over_18: false,
              hidden: false,
              thumbnail:
                'https://b.thumbs.redditmedia.com/i5o6X7Jcvht_uK3ZEHyv5Uai89pD-vmY4qrqepYM3pg.jpg',
              subreddit_id: 't5_2qh1e',
              edited: false,
              link_flair_css_class: null,
              author_flair_css_class: null,
              downs: 0,
              secure_media_embed: {
                content:
                  '&lt;iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F1f1wpHIpyKQ%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1f1wpHIpyKQ&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2F1f1wpHIpyKQ%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="450" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                width: 600,
                scrolling: false,
                height: 450
              },
              saved: false,
              stickied: false,
              is_self: false,
              permalink:
                '/r/videos/comments/31lenf/idiots_body_slamming_hoods_of_random_parked_cars/',
              name: 't3_31lenf',
              created: 1428297419.0,
              url: 'https://www.youtube.com/watch?v=1f1wpHIpyKQ',
              author_flair_text: null,
              title:
                'Idiots body slamming hoods of random parked cars, receive instant karma at end',
              created_utc: 1428293819.0,
              distinguished: null,
              media: {
                oembed: {
                  provider_url: 'https://www.youtube.com/',
                  description: 'Uploaded by ooskah on 2015-04-06.',
                  title:
                    'Idiots body slamming hoods of random parked cars, receive instant karma at end',
                  url: 'https://www.youtube.com/watch?v=1f1wpHIpyKQ',
                  type: 'video',
                  author_name: 'ooskah',
                  height: 450,
                  width: 600,
                  html:
                    '&lt;iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2F1f1wpHIpyKQ%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1f1wpHIpyKQ&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2F1f1wpHIpyKQ%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="450" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                  thumbnail_width: 480,
                  version: '1.0',
                  provider_name: 'YouTube',
                  thumbnail_url:
                    'https://i.ytimg.com/vi/1f1wpHIpyKQ/hqdefault.jpg',
                  thumbnail_height: 360,
                  author_url: 'https://www.youtube.com/user/ooskah'
                },
                type: 'youtube.com'
              },
              mod_reports: [],
              visited: false,
              num_reports: null,
              ups: 4558
            }
          },
          {
            kind: 't3',
            data: {
              domain: 'youtu.be',
              banned_by: null,
              media_embed: {
                content:
                  '&lt;iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FdhWUFXvaZjo%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdhWUFXvaZjo&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FdhWUFXvaZjo%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                width: 600,
                scrolling: false,
                height: 338
              },
              subreddit: 'videos',
              selftext_html: null,
              selftext: '',
              likes: null,
              user_reports: [],
              secure_media: {
                type: 'youtu.be',
                oembed: {
                  provider_url: 'https://www.youtube.com/',
                  description:
                    'The Game of Chairs will determine who will be king or queen of Jesteros. Four players will march around three chairs while music plays until one remains. Who will take the crown in this game of musical chairs? Robb, Cersie, Joffrey, Daeneyrus or....?',
                  title:
                    'Sesame Street: Game of Chairs (Game of Thrones Parody)',
                  url: 'https://www.youtube.com/watch?v=dhWUFXvaZjo',
                  author_name: 'Sesame Street',
                  height: 338,
                  width: 600,
                  html:
                    '&lt;iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FdhWUFXvaZjo%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdhWUFXvaZjo&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FdhWUFXvaZjo%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                  thumbnail_width: 480,
                  version: '1.0',
                  provider_name: 'YouTube',
                  thumbnail_url:
                    'https://i.embed.ly/1/image?url=http%3A%2F%2Fi.ytimg.com%2Fvi%2FdhWUFXvaZjo%2Fhqdefault.jpg&amp;key=b1e305db91cf4aa5a86b732cc9fffceb',
                  type: 'video',
                  thumbnail_height: 360,
                  author_url: 'https://www.youtube.com/user/SesameStreet'
                }
              },
              link_flair_text: null,
              id: '31m7kw',
              gilded: 0,
              archived: false,
              clicked: false,
              report_reasons: null,
              author: 'RolStaart-Beer',
              num_comments: 58,
              score: 524,
              approved_by: null,
              over_18: false,
              hidden: false,
              thumbnail:
                'https://a.thumbs.redditmedia.com/emX69DGnKULt2H-15nlBPVy1YMfHcjhKYaS416D_hN4.jpg',
              subreddit_id: 't5_2qh1e',
              edited: false,
              link_flair_css_class: null,
              author_flair_css_class: null,
              downs: 0,
              secure_media_embed: {
                content:
                  '&lt;iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FdhWUFXvaZjo%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdhWUFXvaZjo&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FdhWUFXvaZjo%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                width: 600,
                scrolling: false,
                height: 338
              },
              saved: false,
              stickied: false,
              is_self: false,
              permalink:
                '/r/videos/comments/31m7kw/sesame_street_game_of_chairs_game_of_thrones/',
              name: 't3_31m7kw',
              created: 1428347478.0,
              url: 'https://youtu.be/dhWUFXvaZjo',
              author_flair_text: null,
              title: "'Sesame Street: Game of Chairs (Game of Thrones Parody)",
              created_utc: 1428318678.0,
              distinguished: null,
              media: {
                type: 'youtu.be',
                oembed: {
                  provider_url: 'https://www.youtube.com/',
                  description:
                    'The Game of Chairs will determine who will be king or queen of Jesteros. Four players will march around three chairs while music plays until one remains. Who will take the crown in this game of musical chairs? Robb, Cersie, Joffrey, Daeneyrus or....?',
                  title:
                    'Sesame Street: Game of Chairs (Game of Thrones Parody)',
                  url: 'https://www.youtube.com/watch?v=dhWUFXvaZjo',
                  author_name: 'Sesame Street',
                  height: 338,
                  width: 600,
                  html:
                    '&lt;iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FdhWUFXvaZjo%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdhWUFXvaZjo&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FdhWUFXvaZjo%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                  thumbnail_width: 480,
                  version: '1.0',
                  provider_name: 'YouTube',
                  thumbnail_url:
                    'https://i.ytimg.com/vi/dhWUFXvaZjo/hqdefault.jpg',
                  type: 'video',
                  thumbnail_height: 360,
                  author_url: 'https://www.youtube.com/user/SesameStreet'
                }
              },
              mod_reports: [],
              visited: false,
              num_reports: null,
              ups: 524
            }
          },
          {
            kind: 't3',
            data: {
              domain: 'youtube.com',
              banned_by: null,
              media_embed: {
                content:
                  '&lt;iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FP_eRWbpQKbg%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DP_eRWbpQKbg&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FP_eRWbpQKbg%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="450" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                width: 600,
                scrolling: false,
                height: 450
              },
              subreddit: 'videos',
              selftext_html: null,
              selftext: '',
              likes: null,
              user_reports: [],
              secure_media: {
                type: 'youtube.com',
                oembed: {
                  provider_url: 'https://www.youtube.com/',
                  description:
                    'Drivers Conversation with Signal Box. (Real Life) All Signal Box conversations on the railway are taped. Box contacts the Driver to alert him of a "potential hazard". The result is far from the professional radio communication it should be, but who blames them, it\'s just darn right funny as the driver descends in to hysterics!',
                  title:
                    'CSR: Signal Box to Driver (Real life radio transmission)',
                  url: 'https://www.youtube.com/watch?v=P_eRWbpQKbg',
                  author_name: 'Vec777',
                  height: 450,
                  width: 600,
                  html:
                    '&lt;iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FP_eRWbpQKbg%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DP_eRWbpQKbg&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FP_eRWbpQKbg%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="450" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                  thumbnail_width: 480,
                  version: '1.0',
                  provider_name: 'YouTube',
                  thumbnail_url:
                    'https://i.embed.ly/1/image?url=http%3A%2F%2Fi.ytimg.com%2Fvi%2FP_eRWbpQKbg%2Fhqdefault.jpg&amp;key=b1e305db91cf4aa5a86b732cc9fffceb',
                  type: 'video',
                  thumbnail_height: 360,
                  author_url: 'https://www.youtube.com/user/Vec777'
                }
              },
              link_flair_text: null,
              id: '31m6m7',
              gilded: 0,
              archived: false,
              clicked: false,
              report_reasons: null,
              author: 'sd70ACeANYDAY',
              num_comments: 28,
              score: 341,
              approved_by: null,
              over_18: false,
              hidden: false,
              thumbnail:
                'https://b.thumbs.redditmedia.com/6k16paQ1T6pAVnUHFxfSmti9mKWEQ9vYN_QHyToZnVQ.jpg',
              subreddit_id: 't5_2qh1e',
              edited: false,
              link_flair_css_class: null,
              author_flair_css_class: null,
              downs: 0,
              secure_media_embed: {
                content:
                  '&lt;iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FP_eRWbpQKbg%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DP_eRWbpQKbg&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FP_eRWbpQKbg%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="450" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                width: 600,
                scrolling: false,
                height: 450
              },
              saved: false,
              stickied: false,
              is_self: false,
              permalink:
                '/r/videos/comments/31m6m7/just_another_day_on_the_railroad/',
              name: 't3_31m6m7',
              created: 1428346622.0,
              url: 'https://www.youtube.com/watch?v=P_eRWbpQKbg',
              author_flair_text: null,
              title: 'Just another day on the railroad.',
              created_utc: 1428317822.0,
              distinguished: null,
              media: {
                type: 'youtube.com',
                oembed: {
                  provider_url: 'https://www.youtube.com/',
                  description:
                    'Drivers Conversation with Signal Box. (Real Life) All Signal Box conversations on the railway are taped. Box contacts the Driver to alert him of a "potential hazard". The result is far from the professional radio communication it should be, but who blames them, it\'s just darn right funny as the driver descends in to hysterics!',
                  title:
                    'CSR: Signal Box to Driver (Real life radio transmission)',
                  url: 'https://www.youtube.com/watch?v=P_eRWbpQKbg',
                  author_name: 'Vec777',
                  height: 450,
                  width: 600,
                  html:
                    '&lt;iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FP_eRWbpQKbg%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DP_eRWbpQKbg&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FP_eRWbpQKbg%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="450" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                  thumbnail_width: 480,
                  version: '1.0',
                  provider_name: 'YouTube',
                  thumbnail_url:
                    'https://i.ytimg.com/vi/P_eRWbpQKbg/hqdefault.jpg',
                  type: 'video',
                  thumbnail_height: 360,
                  author_url: 'https://www.youtube.com/user/Vec777'
                }
              },
              mod_reports: [],
              visited: false,
              num_reports: null,
              ups: 341
            }
          },
          {
            kind: 't3',
            data: {
              domain: 'youtube.com',
              banned_by: null,
              media_embed: {
                content:
                  '&lt;iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FsdJXMeMLRGk%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DsdJXMeMLRGk&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FsdJXMeMLRGk%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="450" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                width: 600,
                scrolling: false,
                height: 450
              },
              subreddit: 'videos',
              selftext_html: null,
              selftext: '',
              likes: null,
              user_reports: [],
              secure_media: {
                type: 'youtube.com',
                oembed: {
                  provider_url: 'https://www.youtube.com/',
                  version: '1.0',
                  title: 'Bryn law breaks down talking about Gary speed',
                  url: 'https://www.youtube.com/watch?v=sdJXMeMLRGk',
                  thumbnail_width: 480,
                  height: 450,
                  width: 600,
                  html:
                    '&lt;iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FsdJXMeMLRGk%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DsdJXMeMLRGk&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FsdJXMeMLRGk%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="450" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                  author_name: 'Patsy19780',
                  provider_name: 'YouTube',
                  thumbnail_url:
                    'https://i.embed.ly/1/image?url=http%3A%2F%2Fi.ytimg.com%2Fvi%2FsdJXMeMLRGk%2Fhqdefault.jpg&amp;key=b1e305db91cf4aa5a86b732cc9fffceb',
                  type: 'video',
                  thumbnail_height: 360,
                  author_url: 'https://www.youtube.com/user/Patsy19780'
                }
              },
              link_flair_text: null,
              id: '31n0kz',
              gilded: 0,
              archived: false,
              clicked: false,
              report_reasons: null,
              author: 'REl3EL',
              num_comments: 26,
              score: 135,
              approved_by: null,
              over_18: false,
              hidden: false,
              thumbnail:
                'https://b.thumbs.redditmedia.com/W9S3O748yVHJhJf83tIJfJuJXGLF2IN1_AQtwD5k94Y.jpg',
              subreddit_id: 't5_2qh1e',
              edited: false,
              link_flair_css_class: null,
              author_flair_css_class: null,
              downs: 0,
              secure_media_embed: {
                content:
                  '&lt;iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FsdJXMeMLRGk%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DsdJXMeMLRGk&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FsdJXMeMLRGk%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="450" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                width: 600,
                scrolling: false,
                height: 450
              },
              saved: false,
              stickied: false,
              is_self: false,
              permalink:
                '/r/videos/comments/31n0kz/sky_sports_presenter_bryn_laws_emotional_report/',
              name: 't3_31n0kz',
              created: 1428364701.0,
              url: 'https://www.youtube.com/watch?v=sdJXMeMLRGk',
              author_flair_text: null,
              title:
                "Sky Sports presenter Bryn Law's emotional report on the suicide of his friend of 20 years and Wales manager Gary Speed.",
              created_utc: 1428335901.0,
              distinguished: null,
              media: {
                type: 'youtube.com',
                oembed: {
                  provider_url: 'https://www.youtube.com/',
                  version: '1.0',
                  title: 'Bryn law breaks down talking about Gary speed',
                  url: 'https://www.youtube.com/watch?v=sdJXMeMLRGk',
                  thumbnail_width: 480,
                  height: 450,
                  width: 600,
                  html:
                    '&lt;iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FsdJXMeMLRGk%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DsdJXMeMLRGk&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FsdJXMeMLRGk%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="450" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                  author_name: 'Patsy19780',
                  provider_name: 'YouTube',
                  thumbnail_url:
                    'https://i.ytimg.com/vi/sdJXMeMLRGk/hqdefault.jpg',
                  type: 'video',
                  thumbnail_height: 360,
                  author_url: 'https://www.youtube.com/user/Patsy19780'
                }
              },
              mod_reports: [],
              visited: false,
              num_reports: null,
              ups: 135
            }
          },
          {
            kind: 't3',
            data: {
              domain: 'youtu.be',
              banned_by: null,
              media_embed: {},
              subreddit: 'videos',
              selftext_html: null,
              selftext: '',
              likes: null,
              user_reports: [],
              secure_media: null,
              link_flair_text: null,
              id: '31myrv',
              gilded: 0,
              archived: false,
              clicked: false,
              report_reasons: null,
              author: 'Duckpaw',
              num_comments: 17,
              score: 133,
              approved_by: null,
              over_18: false,
              hidden: false,
              thumbnail:
                'https://b.thumbs.redditmedia.com/p-kBEC3724d0316Sx_INKdgC5dnI27QkAJ2T-EdFPKM.jpg',
              subreddit_id: 't5_2qh1e',
              edited: false,
              link_flair_css_class: null,
              author_flair_css_class: null,
              downs: 0,
              secure_media_embed: {},
              saved: false,
              stickied: false,
              is_self: false,
              permalink:
                '/r/videos/comments/31myrv/homeless_dog_gets_groomed_to_reveal_his_true/',
              name: 't3_31myrv',
              created: 1428363837.0,
              url: 'https://youtu.be/5tOj-p8ANmM',
              author_flair_text: null,
              title:
                "Homeless Dog Get's Groomed to Reveal His True Beauty - Charlie Get's Adopted Within 48 Hours :)",
              created_utc: 1428335037.0,
              distinguished: null,
              media: null,
              mod_reports: [],
              visited: false,
              num_reports: null,
              ups: 133
            }
          },
          {
            kind: 't3',
            data: {
              domain: 'youtube.com',
              banned_by: null,
              media_embed: {
                content:
                  '&lt;iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FoNRDvDIqD1M%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DoNRDvDIqD1M&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FoNRDvDIqD1M%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                width: 600,
                scrolling: false,
                height: 338
              },
              subreddit: 'videos',
              selftext_html: null,
              selftext: '',
              likes: null,
              user_reports: [],
              secure_media: {
                oembed: {
                  provider_url: 'https://www.youtube.com/',
                  description:
                    'Firstly, we have an example of diamagnetic levitation. Diamagnetic materials are repelled by both the north and the south pole of a regular magnet. However the effect is a very weak one. Water is diamagnetic, and also a substance called pyrolytic graphite, which we show here.',
                  title: 'Two New Magnetic Toys',
                  url: 'https://www.youtube.com/watch?v=oNRDvDIqD1M',
                  type: 'video',
                  author_name: 'Grand Illusions',
                  height: 338,
                  width: 600,
                  html:
                    '&lt;iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FoNRDvDIqD1M%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DoNRDvDIqD1M&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FoNRDvDIqD1M%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                  thumbnail_width: 480,
                  version: '1.0',
                  provider_name: 'YouTube',
                  thumbnail_url:
                    'https://i.embed.ly/1/image?url=http%3A%2F%2Fi.ytimg.com%2Fvi%2FoNRDvDIqD1M%2Fhqdefault.jpg&amp;key=b1e305db91cf4aa5a86b732cc9fffceb',
                  thumbnail_height: 360,
                  author_url: 'https://www.youtube.com/user/henders007'
                },
                type: 'youtube.com'
              },
              link_flair_text: null,
              id: '31k8pb',
              gilded: 0,
              archived: false,
              clicked: false,
              report_reasons: null,
              author: 'Kevclown417',
              num_comments: 153,
              score: 3146,
              approved_by: null,
              over_18: false,
              hidden: false,
              thumbnail:
                'https://b.thumbs.redditmedia.com/ZRKAAaVcwD_Ty93-B7eT8sxnF6Gj6AOcQ7pzH1gsI-w.jpg',
              subreddit_id: 't5_2qh1e',
              edited: false,
              link_flair_css_class: null,
              author_flair_css_class: null,
              downs: 0,
              secure_media_embed: {
                content:
                  '&lt;iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FoNRDvDIqD1M%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DoNRDvDIqD1M&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FoNRDvDIqD1M%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                width: 600,
                scrolling: false,
                height: 338
              },
              saved: false,
              stickied: false,
              is_self: false,
              permalink: '/r/videos/comments/31k8pb/neato/',
              name: 't3_31k8pb',
              created: 1428300481.0,
              url: 'https://www.youtube.com/watch?v=oNRDvDIqD1M',
              author_flair_text: null,
              title: 'Neato',
              created_utc: 1428271681.0,
              distinguished: null,
              media: {
                oembed: {
                  provider_url: 'https://www.youtube.com/',
                  description:
                    'Firstly, we have an example of diamagnetic levitation. Diamagnetic materials are repelled by both the north and the south pole of a regular magnet. However the effect is a very weak one. Water is diamagnetic, and also a substance called pyrolytic graphite, which we show here.',
                  title: 'Two New Magnetic Toys',
                  url: 'https://www.youtube.com/watch?v=oNRDvDIqD1M',
                  type: 'video',
                  author_name: 'Grand Illusions',
                  height: 338,
                  width: 600,
                  html:
                    '&lt;iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FoNRDvDIqD1M%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DoNRDvDIqD1M&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FoNRDvDIqD1M%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                  thumbnail_width: 480,
                  version: '1.0',
                  provider_name: 'YouTube',
                  thumbnail_url:
                    'https://i.ytimg.com/vi/oNRDvDIqD1M/hqdefault.jpg',
                  thumbnail_height: 360,
                  author_url: 'https://www.youtube.com/user/henders007'
                },
                type: 'youtube.com'
              },
              mod_reports: [],
              visited: false,
              num_reports: null,
              ups: 3146
            }
          },
          {
            kind: 't3',
            data: {
              domain: 'youtube.com',
              banned_by: null,
              media_embed: {
                content:
                  '&lt;iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2F--HVVekoqpU%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D--HVVekoqpU&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2F--HVVekoqpU%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="450" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                width: 600,
                scrolling: false,
                height: 450
              },
              subreddit: 'videos',
              selftext_html: null,
              selftext: '',
              likes: null,
              user_reports: [],
              secure_media: {
                oembed: {
                  provider_url: 'https://www.youtube.com/',
                  description: 'Hardcore thug shows he',
                  title:
                    'Gangsta cries like a little bitch after getting a life sentence',
                  url: 'https://www.youtube.com/watch?v=--HVVekoqpU',
                  type: 'video',
                  author_name: 'Zaynalll',
                  height: 450,
                  width: 600,
                  html:
                    '&lt;iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F--HVVekoqpU%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D--HVVekoqpU&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2F--HVVekoqpU%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="450" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                  thumbnail_width: 480,
                  version: '1.0',
                  provider_name: 'YouTube',
                  thumbnail_url:
                    'https://i.embed.ly/1/image?url=http%3A%2F%2Fi.ytimg.com%2Fvi%2F--HVVekoqpU%2Fhqdefault.jpg&amp;key=b1e305db91cf4aa5a86b732cc9fffceb',
                  thumbnail_height: 360,
                  author_url: 'https://www.youtube.com/user/Zaynalll'
                },
                type: 'youtube.com'
              },
              link_flair_text: null,
              id: '31my6i',
              gilded: 0,
              archived: false,
              clicked: false,
              report_reasons: null,
              author: 'thejiujitsupanda',
              num_comments: 39,
              score: 92,
              approved_by: null,
              over_18: false,
              hidden: false,
              thumbnail:
                'https://b.thumbs.redditmedia.com/IHgayO0IgmdthEMQiFp1diA1sEmUNUQgQvfoQ9G8ZNU.jpg',
              subreddit_id: 't5_2qh1e',
              edited: false,
              link_flair_css_class: null,
              author_flair_css_class: null,
              downs: 0,
              secure_media_embed: {
                content:
                  '&lt;iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F--HVVekoqpU%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D--HVVekoqpU&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2F--HVVekoqpU%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="450" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                width: 600,
                scrolling: false,
                height: 450
              },
              saved: false,
              stickied: false,
              is_self: false,
              permalink:
                '/r/videos/comments/31my6i/i_searched_he_dindu_nuffin_on_youtube_and_this/',
              name: 't3_31my6i',
              created: 1428363556.0,
              url: 'https://www.youtube.com/watch?v=--HVVekoqpU',
              author_flair_text: null,
              title:
                'I searched "he dindu nuffin" on YouTube and this was the first result.',
              created_utc: 1428334756.0,
              distinguished: null,
              media: {
                oembed: {
                  provider_url: 'https://www.youtube.com/',
                  description: 'Hardcore thug shows he',
                  title:
                    'Gangsta cries like a little bitch after getting a life sentence',
                  url: 'https://www.youtube.com/watch?v=--HVVekoqpU',
                  type: 'video',
                  author_name: 'Zaynalll',
                  height: 450,
                  width: 600,
                  html:
                    '&lt;iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2F--HVVekoqpU%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D--HVVekoqpU&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2F--HVVekoqpU%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="450" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                  thumbnail_width: 480,
                  version: '1.0',
                  provider_name: 'YouTube',
                  thumbnail_url:
                    'https://i.ytimg.com/vi/--HVVekoqpU/hqdefault.jpg',
                  thumbnail_height: 360,
                  author_url: 'https://www.youtube.com/user/Zaynalll'
                },
                type: 'youtube.com'
              },
              mod_reports: [],
              visited: false,
              num_reports: null,
              ups: 92
            }
          },
          {
            kind: 't3',
            data: {
              domain: 'youtube.com',
              banned_by: null,
              media_embed: {
                content:
                  '&lt;iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2F1fG5N0PGiTY%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1fG5N0PGiTY&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2F1fG5N0PGiTY%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                width: 600,
                scrolling: false,
                height: 338
              },
              subreddit: 'videos',
              selftext_html: null,
              selftext: '',
              likes: null,
              user_reports: [],
              secure_media: {
                type: 'youtube.com',
                oembed: {
                  provider_url: 'https://www.youtube.com/',
                  description: 'Uploaded by fth kurnz on 2013-03-02.',
                  title: "The World's Best Job-Topless Women Trampoline Coach",
                  url: 'https://www.youtube.com/watch?v=1fG5N0PGiTY',
                  author_name: 'fth kurnz',
                  height: 338,
                  width: 600,
                  html:
                    '&lt;iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F1fG5N0PGiTY%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1fG5N0PGiTY&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2F1fG5N0PGiTY%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                  thumbnail_width: 480,
                  version: '1.0',
                  provider_name: 'YouTube',
                  thumbnail_url:
                    'https://i.embed.ly/1/image?url=http%3A%2F%2Fi.ytimg.com%2Fvi%2F1fG5N0PGiTY%2Fhqdefault.jpg&amp;key=b1e305db91cf4aa5a86b732cc9fffceb',
                  type: 'video',
                  thumbnail_height: 360,
                  author_url: 'https://www.youtube.com/user/fthkrnz58'
                }
              },
              link_flair_text: 'Original in comments',
              id: '31kktu',
              gilded: 0,
              archived: false,
              clicked: false,
              report_reasons: null,
              author: 'wolfman863',
              num_comments: 171,
              score: 1623,
              approved_by: null,
              over_18: true,
              hidden: false,
              thumbnail: 'nsfw',
              subreddit_id: 't5_2qh1e',
              edited: false,
              link_flair_css_class: 'information',
              author_flair_css_class: null,
              downs: 0,
              secure_media_embed: {
                content:
                  '&lt;iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F1fG5N0PGiTY%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1fG5N0PGiTY&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2F1fG5N0PGiTY%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                width: 600,
                scrolling: false,
                height: 338
              },
              saved: false,
              stickied: false,
              is_self: false,
              permalink:
                '/r/videos/comments/31kktu/health_and_safety_officer_for_the_topless_women/',
              name: 't3_31kktu',
              created: 1428306919.0,
              url: 'https://www.youtube.com/watch?v=1fG5N0PGiTY',
              author_flair_text: null,
              title:
                'Health and safety officer for the topless women trampoline champion league (NSFW)',
              created_utc: 1428278119.0,
              distinguished: null,
              media: {
                type: 'youtube.com',
                oembed: {
                  provider_url: 'https://www.youtube.com/',
                  description: 'Uploaded by fth kurnz on 2013-03-02.',
                  title: "The World's Best Job-Topless Women Trampoline Coach",
                  url: 'https://www.youtube.com/watch?v=1fG5N0PGiTY',
                  author_name: 'fth kurnz',
                  height: 338,
                  width: 600,
                  html:
                    '&lt;iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2F1fG5N0PGiTY%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1fG5N0PGiTY&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2F1fG5N0PGiTY%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                  thumbnail_width: 480,
                  version: '1.0',
                  provider_name: 'YouTube',
                  thumbnail_url:
                    'https://i.ytimg.com/vi/1fG5N0PGiTY/hqdefault.jpg',
                  type: 'video',
                  thumbnail_height: 360,
                  author_url: 'https://www.youtube.com/user/fthkrnz58'
                }
              },
              mod_reports: [],
              visited: false,
              num_reports: null,
              ups: 1623
            }
          },
          {
            kind: 't3',
            data: {
              domain: 'youtube.com',
              banned_by: null,
              media_embed: {
                content:
                  '&lt;iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FRFl9ptuxd8s%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DRFl9ptuxd8s&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FRFl9ptuxd8s%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="450" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                width: 600,
                scrolling: false,
                height: 450
              },
              subreddit: 'videos',
              selftext_html: null,
              selftext: '',
              likes: null,
              user_reports: [],
              secure_media: {
                oembed: {
                  provider_url: 'https://www.youtube.com/',
                  title: 'Yola Language Song',
                  url: 'https://www.youtube.com/watch?v=RFl9ptuxd8s',
                  type: 'video',
                  html:
                    '&lt;iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FRFl9ptuxd8s%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DRFl9ptuxd8s&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FRFl9ptuxd8s%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="450" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                  thumbnail_width: 480,
                  height: 450,
                  width: 600,
                  version: '1.0',
                  author_name: 'snadhghus',
                  provider_name: 'YouTube',
                  thumbnail_url:
                    'https://i.embed.ly/1/image?url=http%3A%2F%2Fi.ytimg.com%2Fvi%2FRFl9ptuxd8s%2Fhqdefault.jpg&amp;key=b1e305db91cf4aa5a86b732cc9fffceb',
                  thumbnail_height: 360,
                  author_url: 'https://www.youtube.com/user/snadhghus'
                },
                type: 'youtube.com'
              },
              link_flair_text: null,
              id: '31nhlf',
              gilded: 0,
              archived: false,
              clicked: false,
              report_reasons: null,
              author: 'PM_me_colloquialisms',
              num_comments: 9,
              score: 53,
              approved_by: null,
              over_18: false,
              hidden: false,
              thumbnail:
                'https://a.thumbs.redditmedia.com/6sqEhgInPBZTQrg1nvvAvI7IThSVlRBJEMSeY_PS648.jpg',
              subreddit_id: 't5_2qh1e',
              edited: false,
              link_flair_css_class: null,
              author_flair_css_class: null,
              downs: 0,
              secure_media_embed: {
                content:
                  '&lt;iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FRFl9ptuxd8s%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DRFl9ptuxd8s&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FRFl9ptuxd8s%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="450" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                width: 600,
                scrolling: false,
                height: 450
              },
              saved: false,
              stickied: false,
              is_self: false,
              permalink:
                '/r/videos/comments/31nhlf/man_singing_in_yola_an_extinct_dialect_of_english/',
              name: 't3_31nhlf',
              created: 1428372083.0,
              url: 'https://www.youtube.com/watch?v=RFl9ptuxd8s',
              author_flair_text: null,
              title:
                'Man singing in Yola, an extinct dialect of English spoken up until the 19th century in Ireland.',
              created_utc: 1428343283.0,
              distinguished: null,
              media: {
                oembed: {
                  provider_url: 'https://www.youtube.com/',
                  title: 'Yola Language Song',
                  url: 'https://www.youtube.com/watch?v=RFl9ptuxd8s',
                  type: 'video',
                  html:
                    '&lt;iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FRFl9ptuxd8s%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DRFl9ptuxd8s&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FRFl9ptuxd8s%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="450" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                  thumbnail_width: 480,
                  height: 450,
                  width: 600,
                  version: '1.0',
                  author_name: 'snadhghus',
                  provider_name: 'YouTube',
                  thumbnail_url:
                    'https://i.ytimg.com/vi/RFl9ptuxd8s/hqdefault.jpg',
                  thumbnail_height: 360,
                  author_url: 'https://www.youtube.com/user/snadhghus'
                },
                type: 'youtube.com'
              },
              mod_reports: [],
              visited: false,
              num_reports: null,
              ups: 53
            }
          },
          {
            kind: 't3',
            data: {
              domain: 'youtube.com',
              banned_by: null,
              media_embed: {
                content:
                  '&lt;iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FeRq_Pxkg_kU%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DeRq_Pxkg_kU&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FeRq_Pxkg_kU%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="450" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                width: 600,
                scrolling: false,
                height: 450
              },
              subreddit: 'videos',
              selftext_html: null,
              selftext: '',
              likes: null,
              user_reports: [],
              secure_media: {
                type: 'youtube.com',
                oembed: {
                  provider_url: 'https://www.youtube.com/',
                  description: 'hope4messiah hope4messiah@gmail.com',
                  title:
                    'Please share this video... Facebook keeps deleting it',
                  url: 'https://www.youtube.com/watch?v=eRq_Pxkg_kU',
                  author_name: 'Worldwide Hustlin',
                  height: 450,
                  width: 600,
                  html:
                    '&lt;iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FeRq_Pxkg_kU%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DeRq_Pxkg_kU&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FeRq_Pxkg_kU%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="450" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                  thumbnail_width: 480,
                  version: '1.0',
                  provider_name: 'YouTube',
                  thumbnail_url:
                    'https://i.embed.ly/1/image?url=http%3A%2F%2Fi.ytimg.com%2Fvi%2FeRq_Pxkg_kU%2Fhqdefault.jpg&amp;key=b1e305db91cf4aa5a86b732cc9fffceb',
                  type: 'video',
                  thumbnail_height: 360,
                  author_url: 'https://www.youtube.com/user/worldwidehustlin'
                }
              },
              link_flair_text: null,
              id: '31kjtt',
              gilded: 0,
              archived: false,
              clicked: false,
              report_reasons: null,
              author: 'NetflixPizzaParty',
              num_comments: 1516,
              score: 1558,
              approved_by: null,
              over_18: false,
              hidden: false,
              thumbnail:
                'https://b.thumbs.redditmedia.com/h2F-uoyYrv2HGYGxhnU8aRsvVkUoZvLE9GP2H4vVKEc.jpg',
              subreddit_id: 't5_2qh1e',
              edited: false,
              link_flair_css_class: null,
              author_flair_css_class: null,
              downs: 0,
              secure_media_embed: {
                content:
                  '&lt;iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FeRq_Pxkg_kU%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DeRq_Pxkg_kU&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FeRq_Pxkg_kU%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="450" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                width: 600,
                scrolling: false,
                height: 450
              },
              saved: false,
              stickied: false,
              is_self: false,
              permalink:
                '/r/videos/comments/31kjtt/womans_son_suffering_mystery_illness_pleads_for/',
              name: 't3_31kjtt',
              created: 1428306369.0,
              url: 'https://www.youtube.com/watch?v=eRq_Pxkg_kU',
              author_flair_text: null,
              title:
                "Woman's son suffering mystery illness. Pleads for help from the community. (1:48 is when he's shown)",
              created_utc: 1428277569.0,
              distinguished: null,
              media: {
                type: 'youtube.com',
                oembed: {
                  provider_url: 'https://www.youtube.com/',
                  description: 'hope4messiah hope4messiah@gmail.com',
                  title:
                    'Please share this video... Facebook keeps deleting it',
                  url: 'https://www.youtube.com/watch?v=eRq_Pxkg_kU',
                  author_name: 'Worldwide Hustlin',
                  height: 450,
                  width: 600,
                  html:
                    '&lt;iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FeRq_Pxkg_kU%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DeRq_Pxkg_kU&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FeRq_Pxkg_kU%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="450" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                  thumbnail_width: 480,
                  version: '1.0',
                  provider_name: 'YouTube',
                  thumbnail_url:
                    'https://i.ytimg.com/vi/eRq_Pxkg_kU/hqdefault.jpg',
                  type: 'video',
                  thumbnail_height: 360,
                  author_url: 'https://www.youtube.com/user/worldwidehustlin'
                }
              },
              mod_reports: [],
              visited: false,
              num_reports: null,
              ups: 1558
            }
          },
          {
            kind: 't3',
            data: {
              domain: 'youtube.com',
              banned_by: null,
              media_embed: {
                content:
                  '&lt;iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FiCQEc736GO4%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DiCQEc736GO4&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FiCQEc736GO4%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                width: 600,
                scrolling: false,
                height: 338
              },
              subreddit: 'videos',
              selftext_html: null,
              selftext: '',
              likes: null,
              user_reports: [],
              secure_media: {
                type: 'youtube.com',
                oembed: {
                  provider_url: 'https://www.youtube.com/',
                  description:
                    "https://tomscott.com - https://twitter.com/tomscott - pull down for details of Ai Pioppi! In the foothills of the Dolomites, an hour or so north of Venice, lies Ai Pioppi, a restaurant that's home to an astonishing, giant, human-powered, kinetic-art theme park playground.",
                  title:
                    'The Human-Powered, Giant Theme Park Playground: Ai Pioppi',
                  url: 'https://www.youtube.com/watch?v=iCQEc736GO4',
                  author_name: 'Tom Scott',
                  height: 338,
                  width: 600,
                  html:
                    '&lt;iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FiCQEc736GO4%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DiCQEc736GO4&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FiCQEc736GO4%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                  thumbnail_width: 480,
                  version: '1.0',
                  provider_name: 'YouTube',
                  thumbnail_url:
                    'https://i.embed.ly/1/image?url=http%3A%2F%2Fi.ytimg.com%2Fvi%2FiCQEc736GO4%2Fhqdefault.jpg&amp;key=b1e305db91cf4aa5a86b732cc9fffceb',
                  type: 'video',
                  thumbnail_height: 360,
                  author_url: 'https://www.youtube.com/user/enyay'
                }
              },
              link_flair_text: null,
              id: '31nwte',
              gilded: 0,
              archived: false,
              clicked: false,
              report_reasons: null,
              author: 'Murreey',
              num_comments: 4,
              score: 40,
              approved_by: null,
              over_18: false,
              hidden: false,
              thumbnail:
                'https://a.thumbs.redditmedia.com/DdpqaNykkAqCXB9dCiOKloV9px9hBrR0XypwHgR-374.jpg',
              subreddit_id: 't5_2qh1e',
              edited: false,
              link_flair_css_class: null,
              author_flair_css_class: null,
              downs: 0,
              secure_media_embed: {
                content:
                  '&lt;iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FiCQEc736GO4%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DiCQEc736GO4&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FiCQEc736GO4%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                width: 600,
                scrolling: false,
                height: 338
              },
              saved: false,
              stickied: false,
              is_self: false,
              permalink:
                '/r/videos/comments/31nwte/the_humanpowered_giant_theme_park_playground/',
              name: 't3_31nwte',
              created: 1428378606.0,
              url: 'https://www.youtube.com/watch?v=iCQEc736GO4/',
              author_flair_text: null,
              title: 'The Human-Powered, Giant Theme Park Playground',
              created_utc: 1428349806.0,
              distinguished: null,
              media: {
                type: 'youtube.com',
                oembed: {
                  provider_url: 'https://www.youtube.com/',
                  description:
                    "https://tomscott.com - https://twitter.com/tomscott - pull down for details of Ai Pioppi! In the foothills of the Dolomites, an hour or so north of Venice, lies Ai Pioppi, a restaurant that's home to an astonishing, giant, human-powered, kinetic-art theme park playground.",
                  title:
                    'The Human-Powered, Giant Theme Park Playground: Ai Pioppi',
                  url: 'https://www.youtube.com/watch?v=iCQEc736GO4',
                  author_name: 'Tom Scott',
                  height: 338,
                  width: 600,
                  html:
                    '&lt;iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FiCQEc736GO4%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DiCQEc736GO4&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FiCQEc736GO4%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                  thumbnail_width: 480,
                  version: '1.0',
                  provider_name: 'YouTube',
                  thumbnail_url:
                    'https://i.ytimg.com/vi/iCQEc736GO4/hqdefault.jpg',
                  type: 'video',
                  thumbnail_height: 360,
                  author_url: 'https://www.youtube.com/user/enyay'
                }
              },
              mod_reports: [],
              visited: false,
              num_reports: null,
              ups: 40
            }
          },
          {
            kind: 't3',
            data: {
              domain: 'youtube.com',
              banned_by: null,
              media_embed: {
                content:
                  '&lt;iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FLguStmm8bRk%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DLguStmm8bRk&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FLguStmm8bRk%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                width: 600,
                scrolling: false,
                height: 338
              },
              subreddit: 'videos',
              selftext_html: null,
              selftext: '',
              likes: null,
              user_reports: [],
              secure_media: {
                oembed: {
                  provider_url: 'https://www.youtube.com/',
                  title: 'Anne Hathaway on Lip Sync Battle',
                  url: 'https://www.youtube.com/watch?v=LguStmm8bRk',
                  type: 'video',
                  html:
                    '&lt;iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FLguStmm8bRk%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DLguStmm8bRk&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FLguStmm8bRk%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                  thumbnail_width: 480,
                  height: 338,
                  width: 600,
                  version: '1.0',
                  author_name: 'Lip Sync Battle on Spike',
                  provider_name: 'YouTube',
                  thumbnail_url:
                    'https://i.embed.ly/1/image?url=http%3A%2F%2Fi.ytimg.com%2Fvi%2FLguStmm8bRk%2Fhqdefault.jpg&amp;key=b1e305db91cf4aa5a86b732cc9fffceb',
                  thumbnail_height: 360,
                  author_url: 'https://www.youtube.com/user/LipSyncBattle'
                },
                type: 'youtube.com'
              },
              link_flair_text: null,
              id: '31nota',
              gilded: 0,
              archived: false,
              clicked: false,
              report_reasons: null,
              author: 'LOTRcrr',
              num_comments: 11,
              score: 35,
              approved_by: null,
              over_18: false,
              hidden: false,
              thumbnail:
                'https://b.thumbs.redditmedia.com/5TXknPZyvwQBoz-6wXUrAimeYy6aWg5bZpVEwDl7t3A.jpg',
              subreddit_id: 't5_2qh1e',
              edited: false,
              link_flair_css_class: null,
              author_flair_css_class: null,
              downs: 0,
              secure_media_embed: {
                content:
                  '&lt;iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FLguStmm8bRk%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DLguStmm8bRk&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FLguStmm8bRk%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                width: 600,
                scrolling: false,
                height: 338
              },
              saved: false,
              stickied: false,
              is_self: false,
              permalink:
                '/r/videos/comments/31nota/anne_hathaway_on_lip_sync_battle/',
              name: 't3_31nota',
              created: 1428375185.0,
              url: 'https://www.youtube.com/watch?v=LguStmm8bRk#t=',
              author_flair_text: null,
              title: 'Anne Hathaway on Lip Sync Battle',
              created_utc: 1428346385.0,
              distinguished: null,
              media: {
                oembed: {
                  provider_url: 'https://www.youtube.com/',
                  title: 'Anne Hathaway on Lip Sync Battle',
                  url: 'https://www.youtube.com/watch?v=LguStmm8bRk',
                  type: 'video',
                  html:
                    '&lt;iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FLguStmm8bRk%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DLguStmm8bRk&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FLguStmm8bRk%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                  thumbnail_width: 480,
                  height: 338,
                  width: 600,
                  version: '1.0',
                  author_name: 'Lip Sync Battle on Spike',
                  provider_name: 'YouTube',
                  thumbnail_url:
                    'https://i.ytimg.com/vi/LguStmm8bRk/hqdefault.jpg',
                  thumbnail_height: 360,
                  author_url: 'https://www.youtube.com/user/LipSyncBattle'
                },
                type: 'youtube.com'
              },
              mod_reports: [],
              visited: false,
              num_reports: null,
              ups: 35
            }
          },
          {
            kind: 't3',
            data: {
              domain: 'youtube.com',
              banned_by: null,
              media_embed: {
                content:
                  '&lt;iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FBpopP_Sl1e0%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DBpopP_Sl1e0&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FBpopP_Sl1e0%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                width: 600,
                scrolling: false,
                height: 338
              },
              subreddit: 'videos',
              selftext_html: null,
              selftext: '',
              likes: null,
              user_reports: [],
              secure_media: {
                oembed: {
                  provider_url: 'https://www.youtube.com/',
                  description: 'Uploaded by ONEEZE on 2015-03-18.',
                  title: 'Rip Off Medications: Duexis',
                  url: 'https://www.youtube.com/watch?v=BpopP_Sl1e0',
                  type: 'video',
                  author_name: 'ONEEZE',
                  height: 338,
                  width: 600,
                  html:
                    '&lt;iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FBpopP_Sl1e0%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DBpopP_Sl1e0&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FBpopP_Sl1e0%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                  thumbnail_width: 480,
                  version: '1.0',
                  provider_name: 'YouTube',
                  thumbnail_url:
                    'https://i.embed.ly/1/image?url=http%3A%2F%2Fi.ytimg.com%2Fvi%2FBpopP_Sl1e0%2Fhqdefault.jpg&amp;key=b1e305db91cf4aa5a86b732cc9fffceb',
                  thumbnail_height: 360,
                  author_url: 'https://www.youtube.com/user/14thSun'
                },
                type: 'youtube.com'
              },
              link_flair_text: null,
              id: '31lc4v',
              gilded: 0,
              archived: false,
              clicked: false,
              report_reasons: null,
              author: '5ilenceDoGood',
              num_comments: 158,
              score: 559,
              approved_by: null,
              over_18: false,
              hidden: false,
              thumbnail:
                'https://b.thumbs.redditmedia.com/iUXGUCwLM38M_QUkFIc8TkZkloVURo60l6OA7pF3kAY.jpg',
              subreddit_id: 't5_2qh1e',
              edited: false,
              link_flair_css_class: null,
              author_flair_css_class: null,
              downs: 0,
              secure_media_embed: {
                content:
                  '&lt;iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FBpopP_Sl1e0%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DBpopP_Sl1e0&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FBpopP_Sl1e0%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                width: 600,
                scrolling: false,
                height: 338
              },
              saved: false,
              stickied: false,
              is_self: false,
              permalink:
                '/r/videos/comments/31lc4v/the_13_drug_that_costs_1400/',
              name: 't3_31lc4v',
              created: 1428321165.0,
              url: 'https://www.youtube.com/watch?v=BpopP_Sl1e0',
              author_flair_text: null,
              title: 'The $13 drug that costs $1400',
              created_utc: 1428292365.0,
              distinguished: null,
              media: {
                oembed: {
                  provider_url: 'https://www.youtube.com/',
                  description: 'Uploaded by ONEEZE on 2015-03-18.',
                  title: 'Rip Off Medications: Duexis',
                  url: 'https://www.youtube.com/watch?v=BpopP_Sl1e0',
                  type: 'video',
                  author_name: 'ONEEZE',
                  height: 338,
                  width: 600,
                  html:
                    '&lt;iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FBpopP_Sl1e0%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DBpopP_Sl1e0&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FBpopP_Sl1e0%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                  thumbnail_width: 480,
                  version: '1.0',
                  provider_name: 'YouTube',
                  thumbnail_url:
                    'https://i.ytimg.com/vi/BpopP_Sl1e0/hqdefault.jpg',
                  thumbnail_height: 360,
                  author_url: 'https://www.youtube.com/user/14thSun'
                },
                type: 'youtube.com'
              },
              mod_reports: [],
              visited: false,
              num_reports: null,
              ups: 559
            }
          },
          {
            kind: 't3',
            data: {
              domain: 'youtube.com',
              banned_by: null,
              media_embed: {
                content:
                  '&lt;iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FniZpcdp2v34&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DniZpcdp2v34&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FniZpcdp2v34%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                width: 600,
                scrolling: false,
                height: 338
              },
              subreddit: 'videos',
              selftext_html: null,
              selftext: '',
              likes: null,
              user_reports: [],
              secure_media: {
                type: 'youtube.com',
                oembed: {
                  provider_url: 'https://youtube.com',
                  description:
                    "Was playing RA3 today and caught this gem in the Allied campaign! Major props to EA and the C&amp;C team! I couldn't stop laughing and had to pause for a few minutes. lol",
                  url: 'https://www.youtube.com/watch?v=niZpcdp2v34',
                  type: 'video',
                  thumbnail_width: 480,
                  height: 338,
                  width: 600,
                  html:
                    '&lt;iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FniZpcdp2v34&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DniZpcdp2v34&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FniZpcdp2v34%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                  version: '1.0',
                  provider_name: 'YouTube',
                  thumbnail_url:
                    'https://i.embed.ly/1/image?url=http%3A%2F%2Fi.ytimg.com%2Fvi%2FniZpcdp2v34%2Fhqdefault.jpg&amp;key=b1e305db91cf4aa5a86b732cc9fffceb',
                  thumbnail_height: 360
                }
              },
              link_flair_text: null,
              id: '31lm64',
              gilded: 0,
              archived: false,
              clicked: false,
              report_reasons: null,
              author: 'perrilloux',
              num_comments: 64,
              score: 388,
              approved_by: null,
              over_18: false,
              hidden: false,
              thumbnail:
                'https://b.thumbs.redditmedia.com/-8Hv8ZqiUJ5VsiUS39H6a7TChZdaOiMDmAvdY1NoZYw.jpg',
              subreddit_id: 't5_2qh1e',
              edited: false,
              link_flair_css_class: null,
              author_flair_css_class: null,
              downs: 0,
              secure_media_embed: {
                content:
                  '&lt;iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FniZpcdp2v34&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DniZpcdp2v34&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FniZpcdp2v34%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                width: 600,
                scrolling: false,
                height: 338
              },
              saved: false,
              stickied: false,
              is_self: false,
              permalink:
                '/r/videos/comments/31lm64/tim_currys_oscar_clip_from_command_and_conquer/',
              name: 't3_31lm64',
              created: 1428327501.0,
              url: 'https://www.youtube.com/watch?v=niZpcdp2v34',
              author_flair_text: null,
              title: "Tim Curry's oscar clip from Command and Conquer.",
              created_utc: 1428298701.0,
              distinguished: null,
              media: {
                type: 'youtube.com',
                oembed: {
                  provider_url: 'https://youtube.com',
                  description:
                    "Was playing RA3 today and caught this gem in the Allied campaign! Major props to EA and the C&amp;C team! I couldn't stop laughing and had to pause for a few minutes. lol",
                  url: 'https://www.youtube.com/watch?v=niZpcdp2v34',
                  type: 'video',
                  thumbnail_width: 480,
                  height: 338,
                  width: 600,
                  html:
                    '&lt;iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FniZpcdp2v34&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DniZpcdp2v34&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FniZpcdp2v34%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                  version: '1.0',
                  provider_name: 'YouTube',
                  thumbnail_url:
                    'https://i.ytimg.com/vi/niZpcdp2v34/hqdefault.jpg',
                  thumbnail_height: 360
                }
              },
              mod_reports: [],
              visited: false,
              num_reports: null,
              ups: 388
            }
          },
          {
            kind: 't3',
            data: {
              domain: 'youtu.be',
              banned_by: null,
              media_embed: {
                content:
                  '&lt;iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FuMzWbuRMW9U%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DuMzWbuRMW9U&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FuMzWbuRMW9U%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="450" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                width: 600,
                scrolling: false,
                height: 450
              },
              subreddit: 'videos',
              selftext_html: null,
              selftext: '',
              likes: null,
              user_reports: [],
              secure_media: {
                type: 'youtu.be',
                oembed: {
                  provider_url: 'https://www.youtube.com/',
                  description: 'Uploaded by Samima on 2015-03-26.',
                  title: 'POV Motorcycle Crash At Blocked Intersection',
                  url: 'https://www.youtube.com/watch?v=uMzWbuRMW9U',
                  author_name: 'Samima',
                  height: 450,
                  width: 600,
                  html:
                    '&lt;iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FuMzWbuRMW9U%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DuMzWbuRMW9U&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FuMzWbuRMW9U%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="450" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                  thumbnail_width: 480,
                  version: '1.0',
                  provider_name: 'YouTube',
                  thumbnail_url:
                    'https://i.embed.ly/1/image?url=http%3A%2F%2Fi.ytimg.com%2Fvi%2FuMzWbuRMW9U%2Fhqdefault.jpg&amp;key=b1e305db91cf4aa5a86b732cc9fffceb',
                  type: 'video',
                  thumbnail_height: 360,
                  author_url:
                    'https://www.youtube.com/channel/UC6uhAO5aoPSOOuDf04f5YJA'
                }
              },
              link_flair_text: null,
              id: '31nv7y',
              gilded: 0,
              archived: false,
              clicked: false,
              report_reasons: null,
              author: 'FlappyCack69',
              num_comments: 33,
              score: 30,
              approved_by: null,
              over_18: false,
              hidden: false,
              thumbnail:
                'https://b.thumbs.redditmedia.com/Qirt6gV9ahR9FllxnQ8wP6VWAmogbfrg3ArsfNufFvU.jpg',
              subreddit_id: 't5_2qh1e',
              edited: false,
              link_flair_css_class: null,
              author_flair_css_class: null,
              downs: 0,
              secure_media_embed: {
                content:
                  '&lt;iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FuMzWbuRMW9U%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DuMzWbuRMW9U&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FuMzWbuRMW9U%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="450" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                width: 600,
                scrolling: false,
                height: 450
              },
              saved: false,
              stickied: false,
              is_self: false,
              permalink:
                '/r/videos/comments/31nv7y/who_do_you_think_is_at_fault_here/',
              name: 't3_31nv7y',
              created: 1428377931.0,
              url: 'https://youtu.be/uMzWbuRMW9U',
              author_flair_text: null,
              title: 'Who do you think is at fault here?',
              created_utc: 1428349131.0,
              distinguished: null,
              media: {
                type: 'youtu.be',
                oembed: {
                  provider_url: 'https://www.youtube.com/',
                  description: 'Uploaded by Samima on 2015-03-26.',
                  title: 'POV Motorcycle Crash At Blocked Intersection',
                  url: 'https://www.youtube.com/watch?v=uMzWbuRMW9U',
                  author_name: 'Samima',
                  height: 450,
                  width: 600,
                  html:
                    '&lt;iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FuMzWbuRMW9U%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DuMzWbuRMW9U&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FuMzWbuRMW9U%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="450" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                  thumbnail_width: 480,
                  version: '1.0',
                  provider_name: 'YouTube',
                  thumbnail_url:
                    'https://i.ytimg.com/vi/uMzWbuRMW9U/hqdefault.jpg',
                  type: 'video',
                  thumbnail_height: 360,
                  author_url:
                    'https://www.youtube.com/channel/UC6uhAO5aoPSOOuDf04f5YJA'
                }
              },
              mod_reports: [],
              visited: false,
              num_reports: null,
              ups: 30
            }
          },
          {
            kind: 't3',
            data: {
              domain: 'youtube.com',
              banned_by: null,
              media_embed: {
                content:
                  '&lt;iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2F1VZisCc7TP4%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1VZisCc7TP4%26feature%3Dyoutu.be&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2F1VZisCc7TP4%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="450" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                width: 600,
                scrolling: false,
                height: 450
              },
              subreddit: 'videos',
              selftext_html: null,
              selftext: '',
              likes: null,
              user_reports: [],
              secure_media: {
                oembed: {
                  provider_url: 'https://www.youtube.com/',
                  description:
                    "I bet Sam $10 he couldn't eat a piece of sushi without gagging or making any faces.",
                  title: 'Sushi Challenge',
                  url: 'https://www.youtube.com/watch?v=1VZisCc7TP4',
                  type: 'video',
                  author_name: 'Casey Levi',
                  height: 450,
                  width: 600,
                  html:
                    '&lt;iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F1VZisCc7TP4%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1VZisCc7TP4%26feature%3Dyoutu.be&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2F1VZisCc7TP4%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="450" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                  thumbnail_width: 480,
                  version: '1.0',
                  provider_name: 'YouTube',
                  thumbnail_url:
                    'https://i.embed.ly/1/image?url=http%3A%2F%2Fi.ytimg.com%2Fvi%2F1VZisCc7TP4%2Fhqdefault.jpg&amp;key=b1e305db91cf4aa5a86b732cc9fffceb',
                  thumbnail_height: 360,
                  author_url:
                    'https://www.youtube.com/channel/UCIL2XmZrooUKdxUtARnE24Q'
                },
                type: 'youtube.com'
              },
              link_flair_text: null,
              id: '31k3s2',
              gilded: 0,
              archived: false,
              clicked: false,
              report_reasons: null,
              author: 'djsleazyrock',
              num_comments: 608,
              score: 1549,
              approved_by: null,
              over_18: false,
              hidden: false,
              thumbnail:
                'https://b.thumbs.redditmedia.com/RV-m35QivzF3aP2wNa0MPVJ1owIiC88g9YtY1XL7eQY.jpg',
              subreddit_id: 't5_2qh1e',
              edited: false,
              link_flair_css_class: null,
              author_flair_css_class: null,
              downs: 0,
              secure_media_embed: {
                content:
                  '&lt;iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F1VZisCc7TP4%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1VZisCc7TP4%26feature%3Dyoutu.be&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2F1VZisCc7TP4%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="450" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                width: 600,
                scrolling: false,
                height: 450
              },
              saved: false,
              stickied: false,
              is_self: false,
              permalink:
                '/r/videos/comments/31k3s2/i_bet_my_son_10_he_couldnt_eat_a_piece_of_sushi/',
              name: 't3_31k3s2',
              created: 1428297900.0,
              url:
                'https://www.youtube.com/watch?v=1VZisCc7TP4&amp;feature=youtu.be',
              author_flair_text: null,
              title:
                "I bet my son $10 he couldn't eat a piece of sushi without gagging or making any faces.",
              created_utc: 1428269100.0,
              distinguished: null,
              media: {
                oembed: {
                  provider_url: 'https://www.youtube.com/',
                  description:
                    "I bet Sam $10 he couldn't eat a piece of sushi without gagging or making any faces.",
                  title: 'Sushi Challenge',
                  url: 'https://www.youtube.com/watch?v=1VZisCc7TP4',
                  type: 'video',
                  author_name: 'Casey Levi',
                  height: 450,
                  width: 600,
                  html:
                    '&lt;iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2F1VZisCc7TP4%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1VZisCc7TP4%26feature%3Dyoutu.be&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2F1VZisCc7TP4%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="450" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                  thumbnail_width: 480,
                  version: '1.0',
                  provider_name: 'YouTube',
                  thumbnail_url:
                    'https://i.ytimg.com/vi/1VZisCc7TP4/hqdefault.jpg',
                  thumbnail_height: 360,
                  author_url:
                    'https://www.youtube.com/channel/UCIL2XmZrooUKdxUtARnE24Q'
                },
                type: 'youtube.com'
              },
              mod_reports: [],
              visited: false,
              num_reports: null,
              ups: 1549
            }
          },
          {
            kind: 't3',
            data: {
              domain: 'youtube.com',
              banned_by: null,
              media_embed: {
                content:
                  '&lt;iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FPZujRvN0WE8%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DPZujRvN0WE8&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FPZujRvN0WE8%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                width: 600,
                scrolling: false,
                height: 338
              },
              subreddit: 'videos',
              selftext_html: null,
              selftext: '',
              likes: null,
              user_reports: [],
              secure_media: {
                type: 'youtube.com',
                oembed: {
                  provider_url: 'https://www.youtube.com/',
                  version: '1.0',
                  title:
                    'Shallow Blocker/ Shallow mount barrier (PAS68) Road Blocker Crash test : HT1-VIPER',
                  url: 'https://www.youtube.com/watch?v=PZujRvN0WE8',
                  thumbnail_width: 480,
                  height: 338,
                  width: 600,
                  html:
                    '&lt;iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FPZujRvN0WE8%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DPZujRvN0WE8&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FPZujRvN0WE8%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                  author_name: 'Barriers Bollards',
                  provider_name: 'YouTube',
                  thumbnail_url:
                    'https://i.embed.ly/1/image?url=http%3A%2F%2Fi.ytimg.com%2Fvi%2FPZujRvN0WE8%2Fhqdefault.jpg&amp;key=b1e305db91cf4aa5a86b732cc9fffceb',
                  type: 'video',
                  thumbnail_height: 360,
                  author_url: 'https://www.youtube.com/user/roadblockers'
                }
              },
              link_flair_text: null,
              id: '31npzr',
              gilded: 0,
              archived: false,
              clicked: false,
              report_reasons: null,
              author: 'people_call_me_Dale',
              num_comments: 8,
              score: 27,
              approved_by: null,
              over_18: false,
              hidden: false,
              thumbnail:
                'https://a.thumbs.redditmedia.com/uXcFoldo0L8eJMvIzxN8M3xtdsV37HLlcbob3z3zYa0.jpg',
              subreddit_id: 't5_2qh1e',
              edited: false,
              link_flair_css_class: null,
              author_flair_css_class: null,
              downs: 0,
              secure_media_embed: {
                content:
                  '&lt;iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FPZujRvN0WE8%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DPZujRvN0WE8&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FPZujRvN0WE8%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                width: 600,
                scrolling: false,
                height: 338
              },
              saved: false,
              stickied: false,
              is_self: false,
              permalink:
                '/r/videos/comments/31npzr/hydraulic_road_blocks_at_the_entrances_of_the/',
              name: 't3_31npzr',
              created: 1428375686.0,
              url: 'https://www.youtube.com/watch?v=PZujRvN0WE8',
              author_flair_text: null,
              title:
                "Hydraulic road blocks at the entrances of the local military base pop up in case of vehicle attack. Here's what happens.",
              created_utc: 1428346886.0,
              distinguished: null,
              media: {
                type: 'youtube.com',
                oembed: {
                  provider_url: 'https://www.youtube.com/',
                  version: '1.0',
                  title:
                    'Shallow Blocker/ Shallow mount barrier (PAS68) Road Blocker Crash test : HT1-VIPER',
                  url: 'https://www.youtube.com/watch?v=PZujRvN0WE8',
                  thumbnail_width: 480,
                  height: 338,
                  width: 600,
                  html:
                    '&lt;iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FPZujRvN0WE8%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DPZujRvN0WE8&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FPZujRvN0WE8%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                  author_name: 'Barriers Bollards',
                  provider_name: 'YouTube',
                  thumbnail_url:
                    'https://i.ytimg.com/vi/PZujRvN0WE8/hqdefault.jpg',
                  type: 'video',
                  thumbnail_height: 360,
                  author_url: 'https://www.youtube.com/user/roadblockers'
                }
              },
              mod_reports: [],
              visited: false,
              num_reports: null,
              ups: 27
            }
          },
          {
            kind: 't3',
            data: {
              domain: 'youtube.com',
              banned_by: null,
              media_embed: {
                content:
                  '&lt;iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FkZpMoeUqK-A%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DkZpMoeUqK-A&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FkZpMoeUqK-A%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                width: 600,
                scrolling: false,
                height: 338
              },
              subreddit: 'videos',
              selftext_html: null,
              selftext: '',
              likes: null,
              user_reports: [],
              secure_media: {
                oembed: {
                  provider_url: 'https://www.youtube.com/',
                  description:
                    'SUBSCRIBE!: https://goo.gl/HDo2G0 Learn Java is an upcoming tutorial series where DevFactor will be comprehensively covering the entire language and its nuances. Each video will be broken into short 5 minute or less segments, making it optimal for anyone looking to learn Java basics or master advanced Java concepts.',
                  title: 'Introduction to Java Programming - Learn Java #1',
                  url: 'https://www.youtube.com/watch?v=kZpMoeUqK-A',
                  type: 'video',
                  author_name: 'DevFactor',
                  height: 338,
                  width: 600,
                  html:
                    '&lt;iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FkZpMoeUqK-A%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DkZpMoeUqK-A&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FkZpMoeUqK-A%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                  thumbnail_width: 480,
                  version: '1.0',
                  provider_name: 'YouTube',
                  thumbnail_url:
                    'https://i.embed.ly/1/image?url=http%3A%2F%2Fi.ytimg.com%2Fvi%2FkZpMoeUqK-A%2Fhqdefault.jpg&amp;key=b1e305db91cf4aa5a86b732cc9fffceb',
                  thumbnail_height: 360,
                  author_url: 'https://www.youtube.com/user/devfactor'
                },
                type: 'youtube.com'
              },
              link_flair_text: null,
              id: '31nba1',
              gilded: 0,
              archived: false,
              clicked: false,
              report_reasons: null,
              author: 'andhof-mt',
              num_comments: 6,
              score: 37,
              approved_by: null,
              over_18: false,
              hidden: false,
              thumbnail:
                'https://b.thumbs.redditmedia.com/yaoNNbwEhS4oZpIY7xe1e0lEPq-59RC2P9MVk-6t_ok.jpg',
              subreddit_id: 't5_2qh1e',
              edited: false,
              link_flair_css_class: null,
              author_flair_css_class: null,
              downs: 0,
              secure_media_embed: {
                content:
                  '&lt;iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FkZpMoeUqK-A%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DkZpMoeUqK-A&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FkZpMoeUqK-A%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                width: 600,
                scrolling: false,
                height: 338
              },
              saved: false,
              stickied: false,
              is_self: false,
              permalink:
                '/r/videos/comments/31nba1/reddit_we_are_building_a_library_of_free_coding/',
              name: 't3_31nba1',
              created: 1428369380.0,
              url: 'https://www.youtube.com/watch?v=kZpMoeUqK-A?',
              author_flair_text: null,
              title:
                'Reddit, We are Building a Library of FREE Coding Tutorials. Would Love Some Feedback!',
              created_utc: 1428340580.0,
              distinguished: null,
              media: {
                oembed: {
                  provider_url: 'https://www.youtube.com/',
                  description:
                    'SUBSCRIBE!: https://goo.gl/HDo2G0 Learn Java is an upcoming tutorial series where DevFactor will be comprehensively covering the entire language and its nuances. Each video will be broken into short 5 minute or less segments, making it optimal for anyone looking to learn Java basics or master advanced Java concepts.',
                  title: 'Introduction to Java Programming - Learn Java #1',
                  url: 'https://www.youtube.com/watch?v=kZpMoeUqK-A',
                  type: 'video',
                  author_name: 'DevFactor',
                  height: 338,
                  width: 600,
                  html:
                    '&lt;iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FkZpMoeUqK-A%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DkZpMoeUqK-A&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FkZpMoeUqK-A%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                  thumbnail_width: 480,
                  version: '1.0',
                  provider_name: 'YouTube',
                  thumbnail_url:
                    'https://i.ytimg.com/vi/kZpMoeUqK-A/hqdefault.jpg',
                  thumbnail_height: 360,
                  author_url: 'https://www.youtube.com/user/devfactor'
                },
                type: 'youtube.com'
              },
              mod_reports: [],
              visited: false,
              num_reports: null,
              ups: 37
            }
          },
          {
            kind: 't3',
            data: {
              domain: 'youtube.com',
              banned_by: null,
              media_embed: {
                content:
                  '&lt;iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FQtkM70AX2Ks%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DQtkM70AX2Ks&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FQtkM70AX2Ks%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                width: 600,
                scrolling: false,
                height: 338
              },
              subreddit: 'videos',
              selftext_html: null,
              selftext: '',
              likes: null,
              user_reports: [],
              secure_media: {
                oembed: {
                  provider_url: 'https://www.youtube.com/',
                  description:
                    'This is a special video submission to Mutual of Omaha\'s Wild Kingdom "NEW WILD GUIDE" Contest Visit Viperkeeper on Facebook for news &amp; exclusive content: https://www.facebook.com/pages/Viperkeeper/156984027682678',
                  title: 'Elvis: Rampage Edition',
                  url: 'https://www.youtube.com/watch?v=QtkM70AX2Ks',
                  type: 'video',
                  author_name: 'viperkeeper',
                  height: 338,
                  width: 600,
                  html:
                    '&lt;iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FQtkM70AX2Ks%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DQtkM70AX2Ks&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FQtkM70AX2Ks%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                  thumbnail_width: 480,
                  version: '1.0',
                  provider_name: 'YouTube',
                  thumbnail_url:
                    'https://i.embed.ly/1/image?url=http%3A%2F%2Fi.ytimg.com%2Fvi%2FQtkM70AX2Ks%2Fhqdefault.jpg&amp;key=b1e305db91cf4aa5a86b732cc9fffceb',
                  thumbnail_height: 360,
                  author_url: 'https://www.youtube.com/user/viperkeeper'
                },
                type: 'youtube.com'
              },
              link_flair_text: null,
              id: '31iuu0',
              gilded: 0,
              archived: false,
              clicked: false,
              report_reasons: null,
              author: 'Lemons_Huh',
              num_comments: 2100,
              score: 4522,
              approved_by: null,
              over_18: false,
              hidden: false,
              thumbnail:
                'https://a.thumbs.redditmedia.com/qhQHHqub-VRjp-OUvVkG0_TGXegmXatjLc1fwWsbMq0.jpg',
              subreddit_id: 't5_2qh1e',
              edited: false,
              link_flair_css_class: null,
              author_flair_css_class: null,
              downs: 0,
              secure_media_embed: {
                content:
                  '&lt;iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FQtkM70AX2Ks%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DQtkM70AX2Ks&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FQtkM70AX2Ks%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                width: 600,
                scrolling: false,
                height: 338
              },
              saved: false,
              stickied: false,
              is_self: false,
              permalink:
                '/r/videos/comments/31iuu0/snake_keeper_feeding_his_short_tempered_king_cobra/',
              name: 't3_31iuu0',
              created: 1428274268.0,
              url: 'https://www.youtube.com/watch?v=QtkM70AX2Ks',
              author_flair_text: null,
              title: 'Snake Keeper Feeding His Short Tempered King Cobra',
              created_utc: 1428245468.0,
              distinguished: null,
              media: {
                oembed: {
                  provider_url: 'https://www.youtube.com/',
                  description:
                    'This is a special video submission to Mutual of Omaha\'s Wild Kingdom "NEW WILD GUIDE" Contest Visit Viperkeeper on Facebook for news &amp; exclusive content: https://www.facebook.com/pages/Viperkeeper/156984027682678',
                  title: 'Elvis: Rampage Edition',
                  url: 'https://www.youtube.com/watch?v=QtkM70AX2Ks',
                  type: 'video',
                  author_name: 'viperkeeper',
                  height: 338,
                  width: 600,
                  html:
                    '&lt;iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FQtkM70AX2Ks%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DQtkM70AX2Ks&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FQtkM70AX2Ks%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                  thumbnail_width: 480,
                  version: '1.0',
                  provider_name: 'YouTube',
                  thumbnail_url:
                    'https://i.ytimg.com/vi/QtkM70AX2Ks/hqdefault.jpg',
                  thumbnail_height: 360,
                  author_url: 'https://www.youtube.com/user/viperkeeper'
                },
                type: 'youtube.com'
              },
              mod_reports: [],
              visited: false,
              num_reports: null,
              ups: 4522
            }
          },
          {
            kind: 't3',
            data: {
              domain: 'youtube.com',
              banned_by: null,
              media_embed: {
                content:
                  '&lt;iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FrA7VXl3q5HA%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DrA7VXl3q5HA&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FrA7VXl3q5HA%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                width: 600,
                scrolling: false,
                height: 338
              },
              subreddit: 'videos',
              selftext_html: null,
              selftext: '',
              likes: null,
              user_reports: [],
              secure_media: {
                oembed: {
                  provider_url: 'https://www.youtube.com/',
                  description:
                    "Traveling for anyone isn't easy, and traveling for Brian is no exception. Hope you enjoyed this video! www.ShawStrength.com",
                  title: 'Traveling can be more difficult than you think.',
                  url: 'https://www.youtube.com/watch?v=rA7VXl3q5HA',
                  type: 'video',
                  author_name: 'SHAWSTRENGTH',
                  height: 338,
                  width: 600,
                  html:
                    '&lt;iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FrA7VXl3q5HA%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DrA7VXl3q5HA&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FrA7VXl3q5HA%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                  thumbnail_width: 480,
                  version: '1.0',
                  provider_name: 'YouTube',
                  thumbnail_url:
                    'https://i.embed.ly/1/image?url=http%3A%2F%2Fi.ytimg.com%2Fvi%2FrA7VXl3q5HA%2Fhqdefault.jpg&amp;key=b1e305db91cf4aa5a86b732cc9fffceb',
                  thumbnail_height: 360,
                  author_url: 'https://www.youtube.com/user/SHAWSTRENGTH'
                },
                type: 'youtube.com'
              },
              link_flair_text: null,
              id: '31lb04',
              gilded: 0,
              archived: false,
              clicked: false,
              report_reasons: null,
              author: 'creed_bratton_',
              num_comments: 138,
              score: 412,
              approved_by: null,
              over_18: false,
              hidden: false,
              thumbnail:
                'https://b.thumbs.redditmedia.com/5Sw0gDqIWaTTyK7WeBYWUSViIUFbdTbZ--kMh4_x5-Y.jpg',
              subreddit_id: 't5_2qh1e',
              edited: false,
              link_flair_css_class: null,
              author_flair_css_class: null,
              downs: 0,
              secure_media_embed: {
                content:
                  '&lt;iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FrA7VXl3q5HA%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DrA7VXl3q5HA&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FrA7VXl3q5HA%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                width: 600,
                scrolling: false,
                height: 338
              },
              saved: false,
              stickied: false,
              is_self: false,
              permalink:
                '/r/videos/comments/31lb04/dont_watch_this_if_you_are_claustrophobic_68/',
              name: 't3_31lb04',
              created: 1428320474.0,
              url: 'https://www.youtube.com/watch?v=rA7VXl3q5HA',
              author_flair_text: null,
              title:
                "Don't watch this if you are claustrophobic. 6'8\" 420lb (2.032m 0.45kg) professional strongman Brian Shaw gets on an airplane.",
              created_utc: 1428291674.0,
              distinguished: null,
              media: {
                oembed: {
                  provider_url: 'https://www.youtube.com/',
                  description:
                    "Traveling for anyone isn't easy, and traveling for Brian is no exception. Hope you enjoyed this video! www.ShawStrength.com",
                  title: 'Traveling can be more difficult than you think.',
                  url: 'https://www.youtube.com/watch?v=rA7VXl3q5HA',
                  type: 'video',
                  author_name: 'SHAWSTRENGTH',
                  height: 338,
                  width: 600,
                  html:
                    '&lt;iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FrA7VXl3q5HA%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DrA7VXl3q5HA&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FrA7VXl3q5HA%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                  thumbnail_width: 480,
                  version: '1.0',
                  provider_name: 'YouTube',
                  thumbnail_url:
                    'https://i.ytimg.com/vi/rA7VXl3q5HA/hqdefault.jpg',
                  thumbnail_height: 360,
                  author_url: 'https://www.youtube.com/user/SHAWSTRENGTH'
                },
                type: 'youtube.com'
              },
              mod_reports: [],
              visited: false,
              num_reports: null,
              ups: 412
            }
          },
          {
            kind: 't3',
            data: {
              domain: 'youtube.com',
              banned_by: null,
              media_embed: {
                content:
                  '&lt;iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FBADjzW52oWQ%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DBADjzW52oWQ&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FBADjzW52oWQ%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                width: 600,
                scrolling: false,
                height: 338
              },
              subreddit: 'videos',
              selftext_html: null,
              selftext: '',
              likes: null,
              user_reports: [],
              secure_media: {
                oembed: {
                  provider_url: 'https://www.youtube.com/',
                  description:
                    "Unplugged, real wood, Hi Def sound - Box 'N Balls",
                  title: "Box 'N Balls on expert mode &amp; other games",
                  url: 'https://www.youtube.com/watch?v=BADjzW52oWQ',
                  type: 'video',
                  author_name: 'noahog',
                  height: 338,
                  width: 600,
                  html:
                    '&lt;iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FBADjzW52oWQ%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DBADjzW52oWQ&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FBADjzW52oWQ%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                  thumbnail_width: 480,
                  version: '1.0',
                  provider_name: 'YouTube',
                  thumbnail_url:
                    'https://i.embed.ly/1/image?url=http%3A%2F%2Fi.ytimg.com%2Fvi%2FBADjzW52oWQ%2Fhqdefault.jpg&amp;key=b1e305db91cf4aa5a86b732cc9fffceb',
                  thumbnail_height: 360,
                  author_url: 'https://www.youtube.com/user/noahog'
                },
                type: 'youtube.com'
              },
              link_flair_text: null,
              id: '31mpjm',
              gilded: 0,
              archived: false,
              clicked: false,
              report_reasons: null,
              author: 'hostilecarrot',
              num_comments: 20,
              score: 57,
              approved_by: null,
              over_18: false,
              hidden: false,
              thumbnail:
                'https://b.thumbs.redditmedia.com/r_ogNt9O712c63eYEFd44wm9FEcl-eiXadYIUX8YTyI.jpg',
              subreddit_id: 't5_2qh1e',
              edited: false,
              link_flair_css_class: null,
              author_flair_css_class: null,
              downs: 0,
              secure_media_embed: {
                content:
                  '&lt;iframe class="embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FBADjzW52oWQ%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DBADjzW52oWQ&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FBADjzW52oWQ%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                width: 600,
                scrolling: false,
                height: 338
              },
              saved: false,
              stickied: false,
              is_self: false,
              permalink:
                '/r/videos/comments/31mpjm/fun_for_the_kids_or_your_new_favorite_drinking/',
              name: 't3_31mpjm',
              created: 1428359286.0,
              url: 'https://www.youtube.com/watch?v=BADjzW52oWQ',
              author_flair_text: null,
              title:
                'Fun for the kids or your new favorite drinking game? You decide.',
              created_utc: 1428330486.0,
              distinguished: null,
              media: {
                oembed: {
                  provider_url: 'https://www.youtube.com/',
                  description:
                    "Unplugged, real wood, Hi Def sound - Box 'N Balls",
                  title: "Box 'N Balls on expert mode &amp; other games",
                  url: 'https://www.youtube.com/watch?v=BADjzW52oWQ',
                  type: 'video',
                  author_name: 'noahog',
                  height: 338,
                  width: 600,
                  html:
                    '&lt;iframe class="embedly-embed" src="//cdn.embedly.com/widgets/media.html?src=http%3A%2F%2Fwww.youtube.com%2Fembed%2FBADjzW52oWQ%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DBADjzW52oWQ&amp;image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FBADjzW52oWQ%2Fhqdefault.jpg&amp;key=2aa3c4d5f3de4f5b9120b660ad850dc9&amp;type=text%2Fhtml&amp;schema=youtube" width="600" height="338" scrolling="no" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;',
                  thumbnail_width: 480,
                  version: '1.0',
                  provider_name: 'YouTube',
                  thumbnail_url:
                    'https://i.ytimg.com/vi/BADjzW52oWQ/hqdefault.jpg',
                  thumbnail_height: 360,
                  author_url: 'https://www.youtube.com/user/noahog'
                },
                type: 'youtube.com'
              },
              mod_reports: [],
              visited: false,
              num_reports: null,
              ups: 57
            }
          },
          {
            kind: 't3',
            data: {
              domain: 'youtu.be',
              banned_by: null,
              media_embed: {},
              subreddit: 'videos',
              selftext_html: null,
              selftext: '',
              likes: null,
              user_reports: [],
              secure_media: null,
              link_flair_text: null,
              id: '31josg',
              gilded: 0,
              archived: false,
              clicked: false,
              report_reasons: null,
              author: 'PBnFlash',
              num_comments: 203,
              score: 1768,
              approved_by: null,
              over_18: false,
              hidden: false,
              thumbnail:
                'https://b.thumbs.redditmedia.com/5M_CyBgeN6KIAlUDPvEyOEAcS_1-YGMNMtplgMH8lmA.jpg',
              subreddit_id: 't5_2qh1e',
              edited: false,
              link_flair_css_class: null,
              author_flair_css_class: null,
              downs: 0,
              secure_media_embed: {},
              saved: false,
              stickied: false,
              is_self: false,
              permalink:
                '/r/videos/comments/31josg/my_friend_interns_at_a_vfx_studio_he_occasionally/',
              name: 't3_31josg',
              created: 1428290160.0,
              url: 'https://youtu.be/RAZxbtUMu3E',
              author_flair_text: null,
              title:
                'My friend interns at a VFX studio, he occasionally steals a little time on their render farm (breakdown in the comments)',
              created_utc: 1428261360.0,
              distinguished: null,
              media: null,
              mod_reports: [],
              visited: false,
              num_reports: null,
              ups: 1768
            }
          }
        ],
        after: 't3_31josg',
        before: null
      }
    };

    $httpBackend.whenGET(/.*\/r.\/hot\.json\?limit=25/).respond(200, REDDIT);
    $httpBackend.whenGET(/.*/).passThrough();
    $httpBackend.whenPOST(/.*/).passThrough();
    $httpBackend.whenPUT(/.*/).passThrough();
    $httpBackend.whenDELETE(/.*/).passThrough();
  });
})();
