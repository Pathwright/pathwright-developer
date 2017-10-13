webpackJsonp([0xc794819fa3e6],{549:function(n,s){n.exports={data:{markdownRemark:{html:'<h2 id="caused-by"><a href="#caused-by" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Caused by</h2>\n<ul>\n<li>A student subscribing to a school’s subscription plan.</li>\n</ul>\n<h2 id="result-object"><a href="#result-object" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Result object</h2>\n<p>The new student subscription trigger returns information about a User’s subscription to a school’s subscription plan.</p>\n<ul>\n<li><strong>event:</strong> Describes an Event object detailing the type and time of the event being sent to Zapier.</li>\n<li><strong>id:</strong> The ID of the user’s Subscription object.</li>\n<li><strong>user:</strong> Describes a User object, namely the User who subscribed to a plan.</li>\n<li><strong>school:</strong> Describes a School object, namely the school in which the subscription was started.</li>\n<li>\n<p><strong>gifted_subscription:</strong> Extra information about a subscription that was gifted. Only set if the subscription was gifted.</p>\n<ul>\n<li><strong>gifted_subscription_cycles:</strong> The number of cycles of the subscription that were gifted.</li>\n<li><strong>gift_code:</strong> The code for the gift subscription.</li>\n</ul>\n</li>\n<li><strong>discount_code:</strong> If not null, the discount code, a string, that was used to discount the subscription plan.</li>\n<li>\n<p><strong>subscription:</strong> Information about the subscription that comes from Stripe.</p>\n<ul>\n<li><strong>id:</strong> The Subscription’s unique ID.</li>\n<li>\n<p><strong>subscription_plan:</strong> Information about the plan that the User subscribed to.</p>\n<ul>\n<li><strong>id:</strong> The plan’s unique ID.</li>\n<li><strong>amount:</strong> The amount that this plan costs per month, in the school’s currency.</li>\n<li><strong>interval:</strong> Either <code>Monthly</code> or <code>Yearly</code>, depending on billing frequency.</li>\n<li><strong>trial_period_days:</strong> The number of days included for free with this plan as part of a trial.</li>\n</ul>\n</li>\n<li><strong>trial_end_dtime:</strong> If the subscription included a trial, this is when it ended/will end.</li>\n<li><strong>canceled_dtime:</strong> If the subscription was canceled, this is when the cancellation was processed. Note that this does not indicate whether or not the subscription is active. A mixture of other attributes in this object can be used for that purpose, notably <code>is_canceled_at_cycle_end</code> and <code>cycle_end_dtime</code>.</li>\n<li><strong>cycle_start_dtime:</strong> The start time of the current billing cycle, or last billing cycle in inactive subscriptions.</li>\n<li><strong>cycle_end_dtime:</strong> The end time of the current billing cycle, or last billing cycle in inactive subscriptions.</li>\n<li><strong>card_last_4:</strong> The last 4 digits of the card to be used for the subscription.</li>\n<li><strong>paused_until_dtime:</strong> If set, this subscription is paused, and will be automatically resumed on at this time.</li>\n<li><strong>is_canceled_at_cycle_end:</strong> If true, the user has processed a cancellation request for their subscription, and it will be cancelled at the end of the current cycle. Also set true for inactive subscriptions that were canceled.</li>\n<li><strong>is_delinquent:</strong> Whether or not payments have failed, leaving the subscription delinquent.</li>\n<li><strong>cancellation_reason:</strong> An integer describing the reason for cancelling the subscription.</li>\n</ul>\n</li>\n</ul>\n<h2 id="example-object"><a href="#example-object" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example object</h2>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">"event"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"student.subscription.succeeded"</span><span class="token punctuation">,</span>\n        <span class="token property">"sent_time"</span><span class="token operator">:</span> <span class="token string">"2014-11-06T18:27:54.482456+00:00"</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">14519</span><span class="token punctuation">,</span>\n    <span class="token property">"user"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">"username"</span><span class="token operator">:</span> <span class="token string">"john_doe"</span><span class="token punctuation">,</span>\n        <span class="token property">"first_name"</span><span class="token operator">:</span> <span class="token string">"John"</span><span class="token punctuation">,</span>\n        <span class="token property">"last_name"</span><span class="token operator">:</span> <span class="token string">"Doe"</span><span class="token punctuation">,</span>\n        <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"john.doe@example.com"</span><span class="token punctuation">,</span>\n        <span class="token property">"membership"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token property">"membership_type"</span><span class="token operator">:</span> <span class="token string">"Student"</span><span class="token punctuation">,</span>\n            <span class="token property">"can_manage_school"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n            <span class="token property">"is_school_admin"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n            <span class="token property">"can_create_course"</span><span class="token operator">:</span> <span class="token boolean">false</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">52047</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token property">"school"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">32253</span><span class="token punctuation">,</span>\n        <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Online Academy"</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token property">"gifted_subscription"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">"gifted_subscription_cycles"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>\n        <span class="token property">"gift_code"</span><span class="token operator">:</span> <span class="token string">"GIFT-CODE"</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token property">"discount_code"</span><span class="token operator">:</span> <span class="token null">null</span><span class="token punctuation">,</span>\n    <span class="token property">"subscription"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">14519</span><span class="token punctuation">,</span>\n        <span class="token property">"subscription_plan"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>\n            <span class="token property">"amount"</span><span class="token operator">:</span> <span class="token number">27</span><span class="token punctuation">,</span>\n            <span class="token property">"interval"</span><span class="token operator">:</span> <span class="token string">"Monthly"</span><span class="token punctuation">,</span>\n            <span class="token property">"trial_period_days"</span><span class="token operator">:</span> <span class="token number">0</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token property">"trial_end_dtime"</span><span class="token operator">:</span> <span class="token null">null</span><span class="token punctuation">,</span>\n        <span class="token property">"canceled_dtime"</span><span class="token operator">:</span> <span class="token null">null</span><span class="token punctuation">,</span>\n        <span class="token property">"cycle_start_dtime"</span><span class="token operator">:</span> <span class="token string">"2014-11-05T10:52:58Z"</span><span class="token punctuation">,</span>\n        <span class="token property">"cycle_end_dtime"</span><span class="token operator">:</span> <span class="token string">"2014-12-05T10:52:58Z"</span><span class="token punctuation">,</span>\n        <span class="token property">"card_last_4"</span><span class="token operator">:</span> <span class="token string">"5678"</span><span class="token punctuation">,</span>\n        <span class="token property">"paused_until_dtime"</span><span class="token operator">:</span> <span class="token null">null</span><span class="token punctuation">,</span>\n        <span class="token property">"is_canceled_at_cycle_end"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n        <span class="token property">"is_delinquent"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n        <span class="token property">"cancellation_reason"</span><span class="token operator">:</span> <span class="token number">0</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>',tableOfContents:'<ul>\n<li><a href="#caused-by">Caused by</a></li>\n<li><a href="#result-object">Result object</a></li>\n<li><a href="#example-object">Example object</a></li>\n</ul>',frontmatter:{title:"New student subscription"}}},pathContext:{slug:"/zapier/triggers/new-student-subscription/"}}}});
//# sourceMappingURL=path---zapier-triggers-new-student-subscription-e3527139246126f53fec.js.map