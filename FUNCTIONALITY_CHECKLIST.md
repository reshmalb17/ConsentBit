# Functionality Checklist - Post Bundle Cleaning

This document lists all critical functionalities that should be tested after the bundle cleaning process to ensure nothing is broken.

## ✅ Core Features to Test

### 1. Authentication & Authorization
- [ ] **Authorize button** - Opens OAuth flow
- [ ] **Auto-refresh token** - Token refresh works automatically
- [ ] **Session persistence** - Login persists across page reloads
- [ ] **Site-specific auth** - Authentication works per Webflow site

### 2. Welcome Screen & Navigation
- [ ] **Scan Project button** - Triggers site scanning
- [ ] **Customize button** - Opens customization tab
- [ ] **Welcome screen display** - Shows correctly when not authenticated
- [ ] **Skip welcome screen** - Works when banner already added

### 3. Script Scanning & Management
- [ ] **Scan Project** - Scans site for scripts and cookies
- [ ] **Script detection** - Correctly identifies scripts
- [ ] **Save All scripts** - Saves scripts to backend
- [ ] **Activate script** - Activates selected scripts
- [ ] **Dismiss script** - Dismisses selected scripts
- [ ] **Copy script** - Copies script tag to clipboard
- [ ] **Edit script** - Allows editing script details
- [ ] **Rescan Project** - Re-scans for new scripts

### 4. Banner Customization
- [ ] **Color pickers** - All color pickers work (background, text, buttons)
- [ ] **Font selection** - Font dropdown works
- [ ] **Font size** - Size slider works
- [ ] **Font weight** - Weight selection works
- [ ] **Border radius** - Radius sliders work
- [ ] **Alignment** - Alignment options work
- [ ] **Animation selection** - Animation dropdown works
- [ ] **Easing selection** - Easing dropdown works
- [ ] **Language selection** - Language dropdown works
- [ ] **Toggle switches** - All toggles work (scroll lock, close button, etc.)
- [ ] **Settings tabs** - Tab navigation works

### 5. Banner Publishing
- [ ] **Publish button** - Publishes banner to site
- [ ] **Publish confirmation** - Confirmation dialog shows
- [ ] **Success screen** - Success animation displays correctly
- [ ] **Success screen animations** - Framer-motion animations work
- [ ] **Customize from success** - Button works on success screen

### 6. Notifications & Tooltips
- [ ] **Error notifications** - Webflow notifications show on errors
- [ ] **Success notifications** - Success notifications display
- [ ] **Tooltip display** - Custom tooltips show correctly
- [ ] **Tooltip auto-dismiss** - Tooltips dismiss after timeout
- [ ] **Tooltip fade animations** - Fade in/out animations work
- [ ] **"Publish site" notification** - Shows when site not published

### 7. Data Management
- [ ] **CSV Export** - Exports consent data to CSV
- [ ] **PDF Download** - Downloads visitor PDFs
- [ ] **Data persistence** - Settings persist across reloads
- [ ] **Site-specific data** - Data isolated per site
- [ ] **Clear data** - Clear data functionality works

### 8. UI Components
- [ ] **Modal dialogs** - All modals open/close correctly
- [ ] **Dropdowns** - All dropdowns work
- [ ] **Input fields** - All inputs accept values
- [ ] **Buttons** - All buttons trigger actions
- [ ] **Loading states** - Loading indicators show/hide correctly
- [ ] **Error states** - Error messages display correctly

### 9. Framer-Motion Animations (Critical)
- [ ] **Success screen SVG animation** - Circle animation works
- [ ] **Success screen checkmark** - Path animation works
- [ ] **Animation timing** - Animations play at correct speed
- [ ] **Animation completion** - Animations complete fully

### 10. Webflow API Integration
- [ ] **getSiteInfo** - Retrieves site information
- [ ] **getSelectedElement** - Gets selected element
- [ ] **createElement** - Creates banner elements
- [ ] **setStyles** - Applies styles to elements
- [ ] **publishSite** - Publishes site changes
- [ ] **notify** - Shows Webflow notifications

## ⚠️ Potential Risk Areas

### High Risk (Directly affected by cleaning)
1. **Framer-Motion animations** - Uses `new Function("return this")()` for global context
   - **Status**: ✅ Should work - replaced with safe global getter
   - **Test**: Success screen animations

2. **Global object access** - Any code accessing global object
   - **Status**: ✅ Should work - replacement preserves functionality
   - **Test**: All features that use global context

### Medium Risk (Indirectly affected)
1. **Minified code patterns** - Complex minified patterns might be affected
   - **Status**: ⚠️ Monitor - aggressive patterns might catch edge cases
   - **Test**: All button clicks and interactions

2. **Third-party libraries** - Libraries using `new Function`
   - **Status**: ✅ Should work - only framer-motion uses it
   - **Test**: All library-dependent features

### Low Risk (Not affected)
1. **React event handlers** - Pure React code
2. **State management** - React state hooks
3. **API calls** - Direct HTTP/Webflow API calls
4. **CSS/styling** - Pure CSS

## 🔍 What the Cleaning Script Does

### Safe Replacements (Preserve Functionality)
- `new Function("return this")()` → `(function(){return typeof window!="undefined"?window:this})()`
- `this||new Function("return this")()` → `this||(function(){return typeof window!="undefined"?window:this})()`
- `new Function("return window")()` → `window`

### Conservative Replacements (May Affect Functionality)
- Other `new Function("code")()` → `function(){return undefined}()`
  - **Risk**: If any code relies on dynamic code execution
  - **Mitigation**: Only matches simple string patterns, not complex ones

### Removals (Safe)
- `eval()` patterns → `null` or `Promise.resolve(null)`
- Console Ninja functions → Stubbed out

## 📝 Testing Recommendations

1. **Test in order of importance:**
   - Start with critical user flows (auth → scan → customize → publish)
   - Then test individual features
   - Finally test edge cases

2. **Test in different contexts:**
   - Fresh install (no cached data)
   - Existing install (with cached data)
   - Different browsers
   - Different Webflow sites

3. **Monitor console for errors:**
   - Check browser console for JavaScript errors
   - Check for failed API calls
   - Check for React errors

4. **Verify animations:**
   - Success screen animations should play smoothly
   - No janky or broken animations
   - Animations complete fully

## ✅ Expected Behavior

After cleaning, all functionalities should work **exactly the same** as before, except:
- No `new Function` or `eval` patterns in the bundle (marketplace requirement)
- Slightly larger bundle size (due to longer replacement strings)
- No functional differences

## 🚨 If Something Breaks

1. Check browser console for errors
2. Verify the replacement didn't break syntax
3. Check if the pattern was incorrectly matched
4. Review the specific functionality's code
5. Test with a fresh bundle (rebuild)

