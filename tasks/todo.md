- [x] 定位 PGI “缺少主要位置标记” 的根因
- [x] 将主页主内容容器改为语义化 `main`
- [x] 运行构建验证改动没有副作用

## Review

- 已确认问题根因是主页主内容缺少 `main` landmark，扫描器因此把问题挂到 `html` 节点。
- `npm run build` 已通过，语义修复未引入构建错误。

## 2026-03-13 Renovate 同步与分组

- [x] 盘点 `package.json` 当前依赖与现有 Renovate 规则差异
- [x] 重组 `renovate.json` 的分组配置并与现有依赖同步
- [x] 校验 Renovate 配置有效性并记录结果

## 2026-03-13 Review

- 旧配置只对 `lint`/`prettier` 做了模糊匹配，无法覆盖当前的 Astro、样式链、站点资源与 TypeScript 依赖结构。
- `renovate.json` 已改为显式包名与通配分组，非重大版本更新会按技术栈合并，`wrangler` 保持单包更新以隔离部署风险。
- `npx --yes --package renovate renovate-config-validator --strict renovate.json` 已通过，配置语义有效。
