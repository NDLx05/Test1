# Hầm Mỏ Thức Giấc — Implementation plan

Goal: ship the first playable independent chapter, village + three mine floors, noise/stealth/mining, slime companion, forge, copper pick, lift, saving and recovery.
Architecture: dependency-free browser ES modules. Pure simulation in core.js, authored geometry in world.js, Canvas rendering and DOM HUD. Source ZIP for the user's own GitHub deployment. No PixelWorld resources or saves reused.
Spec: approved design in conversation, 28 sections. This release implements milestones 1–4; ten-floor story, later companions and final boss are roadmap, not claimed complete.

## Tasks
- [x] Core simulation and deterministic tests: mining resource conservation, delayed impact/cancellation, event hearing, LOS, awakening decay, inventory cap, forge payment, companion, lost bag, import validation.
- [x] Three authored floors and village: reachable ores, alternative paths, gates, lift, chest, friendly slime.
- [x] Canvas game, touch/keyboard, contextual actions, aiming, paused menus, map/journal, settings and audio.
- [x] Browser QA and integration tests; packaging, docs and persistent delivery.

## Review focus
Inventory full must retain drops; repeat construction must not double spend; stale input must not survive modal/blur; malformed saves must not poison simulation; locked gate must have obtainable copper upstream.

## Decisions
Deliver chapter 1 first as explicitly staged in design. Runtime vector/canvas sprites with procedural animations are original to this project; generated title artwork is separate. All three floors use same basic rock theme in this release. No online server or App Store binary.
